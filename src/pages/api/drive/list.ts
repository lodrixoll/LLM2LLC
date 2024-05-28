import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { google } from 'googleapis';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log('Request received:', req.method, req.url);

    const session = await getSession({ req });

    if (!session || !session.user || !session.user.email) {
        console.log('Session or user email is missing');
        return res.status(401).json({ error: 'Unauthorized' });
    }

    const user = await prisma.user.findUnique({
        where: { email: session.user.email },
    });

    if (!user) {
        console.log('User not found in database');
        return res.status(401).json({ error: 'User not found' });
    }

    if (!user.accessToken) {
        console.log('Access token is missing');
        return res.status(401).json({ error: 'Missing access token' });
    }

    const oauth2Client = new google.auth.OAuth2(
        process.env.GOOGLE_CLIENT_ID,
        process.env.GOOGLE_CLIENT_SECRET,
        process.env.NEXTAUTH_URL
    );

    oauth2Client.setCredentials({
        access_token: user.accessToken,
        refresh_token: user.refreshToken,
    });

    // Refresh the access token if needed
    oauth2Client.on('tokens', async (tokens) => {
        if (tokens.refresh_token) {
            await prisma.user.update({
                where: { email: user.email },
                data: { refreshToken: tokens.refresh_token },
            });
        }
        if (tokens.access_token) {
            await prisma.user.update({
                where: { email: user.email },
                data: { accessToken: tokens.access_token },
            });
        }
    });

    const drive = google.drive({ version: 'v3', auth: oauth2Client });

    try {
        const response = await drive.files.list({
            fields: 'files(id, name)',
        });
        console.log('Files fetched successfully');
        return res.status(200).json(response.data);
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
        console.error('Error fetching files:', errorMessage);
        return res.status(500).json({ error: errorMessage });
    }
}