import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const clientId = process.env.GOOGLE_CLIENT_ID;
const clientSecret = process.env.GOOGLE_CLIENT_SECRET;

if (!clientId || !clientSecret) {
    throw new Error('Missing Google OAuth environment variables');
}

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId,
            clientSecret,
        }),
    ],
    callbacks: {
        async signIn({ user, account, profile }) {
            if (!user.email) {
                throw new Error('Email is missing from user data');
            }

            if (!account) {
                throw new Error('Account information is missing');
            }

            // Check if the user already exists in the database
            const existingUser = await prisma.user.findUnique({
                where: { email: user.email },
            });

            if (!existingUser) {
                // Create a new user if they don't exist
                await prisma.user.create({
                    data: {
                        name: user.name,
                        email: user.email,
                        image: user.image,
                        accessToken: account.access_token,
                        refreshToken: account.refresh_token,
                    },
                });
            } else {
                // Update the existing user with new information
                await prisma.user.update({
                    where: { email: user.email },
                    data: {
                        name: user.name,
                        image: user.image,
                        accessToken: account.access_token,
                        refreshToken: account.refresh_token,
                    },
                });
            }

            return true;
        },
        async session({ session, token, user }) {
            if (!session.user || !session.user.email) {
                throw new Error('Email is missing from session data');
            }

            // Attach user ID to the session object
            const dbUser = await prisma.user.findUnique({
                where: { email: session.user.email },
            });

            // if (dbUser) {
            //     session.user.id = dbUser.id;
            // }

            return session;
        },
    },
});