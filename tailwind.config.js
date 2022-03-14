const colors = require("tailwindcss/colors");
module.exports = {
    mode: "jit",
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./data/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Remove the "gray" colors from the theme.
                gray: {},
                grey: {
                    ...colors["slate"],
                },
            },
        },
    },
    plugins: [],
};
