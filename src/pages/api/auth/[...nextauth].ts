import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

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
    // Optional: Customize your sign-in page or other NextAuth settings here
    // pages: {
    //   signIn: '/auth/signin',
    //   signOut: '/auth/signout',
    //   error: '/auth/error',
    // },
});