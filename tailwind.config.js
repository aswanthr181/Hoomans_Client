/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            // Custom theme settings here
            colors: {
                'custom-pink': '#FF0059',
              },
        },
    },
    plugins: [],
}
