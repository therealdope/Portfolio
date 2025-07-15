/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                lightHover: '#F5F5F5',
                darkHover: '#282828',
                darkTheme: '#121212',
            },
            fontFamily: {
                Outfit: ['Outfit', 'sans-serif'],
                Ovo: ['Ovo', 'serif'],
            },
            boxShadow: {
                'black': '4px 4px 0 #000',
                'white': '4px 4px 0 #fff',
            },
            gridTemplateColumns: {
                'auto': 'repeat(auto-fit, minmax(200px, 1fr))',
            },
            keyframes: {
                shine: {
                    '0%': { 'background-position': '100%' },
                    '100%': { 'background-position': '-100%' },
                },
            },
            animation: {
                shine: 'shine 5s linear infinite',
            },
        },
    },
    darkMode: 'selector',
    plugins: [],
};