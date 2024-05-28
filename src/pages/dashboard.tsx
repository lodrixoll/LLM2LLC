import { getSession, signOut } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Dashboard = () => {
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const checkSession = async () => {
            const session = await getSession();
            if (!session) {
                router.push('/register');
            } else {
                setLoading(false);
            }
        };
        checkSession();
    }, [router]);

    if (loading) {
        return <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-t from-mint-start to-mint-end text-center py-5" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Loading...</h1>
        </div>;
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-t from-mint-start to-mint-end text-center py-5" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Welcome to your Dashboard</h1>
            <button className="bg-gray-200 text-gray-700 py-3 px-6 rounded-lg text-lg hover:bg-gray-300 transition duration-300" onClick={() => signOut()}>Sign Out</button>
        </div>
    );
};

export default Dashboard;