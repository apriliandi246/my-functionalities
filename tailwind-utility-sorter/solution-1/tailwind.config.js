module.exports = {
	mode: "jit",
	purge: { enabled: true, content: ["./pages/**/*.html"] },
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				primary: {
					100: "#c1dbf7",
					200: "#b2d2f5",
					300: "#a2c9f3",
					400: "#93c0f1",
					500: "#83b7ef",
					600: "#74aeed",
					700: "#65a5ec",
				},
				success: {
					100: "#d0e8d8",
					200: "#c1e1cc",
					300: "#b2dabf",
					400: "#a2d2b2",
					500: "#93cba6",
					600: "#83c399",
					700: "#74bc8c",
					800: "#65b580",
				},
				danger: {
					100: "#ffc6c2",
					200: "#ffb3ad",
					300: "#ff8d85",
					400: "#ff7a70",
					500: "#ff675c",
					600: "#ff5448",
					700: "#ff4234",
				},
			},

			fontFamily: {
				sans: ["Poppins", "sans-serif"],
			},

			boxShadow: {
				custom: "0px 12px 40px rgba(163, 112, 176, 0.2)",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
