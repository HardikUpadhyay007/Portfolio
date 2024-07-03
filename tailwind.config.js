module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}", // Path to your files
    ],
    theme: {
        extend: {
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
            },
            colors: {
                "custom-blue": "#007bff", // Example of adding a custom color
                "eerie-grey": "hsl(240, 3%, 12%)",
                "smoky-black": "#100c08",
                "avatar-color": "hsl(240,1%,22%)",
                "custom-grey": "hsl(0, 0%, 84%);",
                "custom-gradient":
                    "linear-gradient(115deg, #444444 0%, #222222 5%, #000000 100%)",
            },
            spacing: {
                128: "32rem", // Example of adding a custom spacing
            },
            borderRadius: {
                large: "12px", // Example of adding a custom border radius
            },
        },
    },
    plugins: [],
};
