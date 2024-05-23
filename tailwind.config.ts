import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                'mint-start': '#006B4F', // Darker mint green start
                'mint-end': '#00C89D',   // Lighter mint green end
                'mint-500': '#008361',
                'mint-600': '#006B4F',
            },
            backgroundImage: {
                'gradient-to-b': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [],
};
export default config;