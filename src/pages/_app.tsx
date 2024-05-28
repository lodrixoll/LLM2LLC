import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <SessionProvider>
            <Head>
                <title>llm2llc</title>
            </Head>
            <Component {...pageProps} />
        </SessionProvider>
    );
}

export default MyApp;