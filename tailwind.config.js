/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: 'var(--primary-color)',
                secondary: 'var(--secondary-color)',
            },
            backgroundColor: {
                gray: 'var(--gray-color)',
                'dark-gray': 'var(--dark-gray-color)',
            },
            fontFamily: {
                comfortaa: ['Comfortaa', 'sans-serif'],
                vollkorn: ['Vollkorn', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
