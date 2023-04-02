/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        container: {
            screens: {
                sm: "540px",
                md: "720px",
                lg: "960px",
                xl: "1140px",
                "2xl": "1320px",
            },
            padding: {
                DEFAULT: "1rem",
                sm: "1rem",
                lg: "1rem",
                xl: "1rem",
                "2xl": "3rem",
            },
            center: true,
        },
        extend: {
            colors: {
                primary: "#2595C9",
                primaryBackground: "#E5F3FB",
                dark: "#1E1B1C",
                gray: "#9FA0AB",
                gray2: "#F3F3F3",
            },
            fontFamily: {
                playfair: ["Playfair Display", "serif"],
                plusjakarta: ["Plus Jakarta Sans", "sans-serif"],
            },
            boxShadow: {
                navbar: "0px 4px 4px #E5F3FB",
                box: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                contactButton: "0px 4px 4px rgba(255, 255, 255, 0.25)",
            },
            backgroundImage: {
                contactBox: "linear-gradient(180deg, #2595C9 0%, #074157 100%)",
            },
        },
    },
    plugins: [],
};
