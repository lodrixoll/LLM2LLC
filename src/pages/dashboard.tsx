import { getSession, signOut } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

type File = {
    id: string;
    name: string;
};

const Dashboard = () => {
    const [loading, setLoading] = useState(true);
    const [files, setFiles] = useState<File[]>([]);
    const [error, setError] = useState<string | null>(null);
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

    const fetchFiles = async () => {
        try {
            const response = await fetch('/api/drive/list');
            const data = await response.json();
            if (response.ok) {
                setFiles(data.files);
                setError(null);
            } else {
                setError(data.error);
            }
        } catch (error) {
            setError('Error fetching files');
        }
    };

    if (loading) {
        return <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-t from-mint-start to-mint-end text-center py-5" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Loading...</h1>
        </div>;
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-t from-mint-start to-mint-end text-center py-5" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Welcome to your Dashboard</h1>
            <button className="bg-gray-200 text-gray-700 py-3 px-6 rounded-lg text-lg hover:bg-gray-300 transition duration-300" onClick={() => signOut()}>Sign Out</button>
            <button className="bg-blue-500 text-white py-3 px-6 rounded-lg text-lg hover:bg-blue-600 transition duration-300 mt-4" onClick={fetchFiles}>Fetch Drive Files</button>
            {error && <p className="text-red-500 mt-4">{error}</p>}
            <ul className="mt-4">
                {files.map((file) => (
                    <li key={file.id} className="text-gray-700">{file.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;