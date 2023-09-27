import type { Config } from "tailwindcss";

export default {
    plugins: [require("@tailwindcss/typography")],
    content: ["./src/**/*.{html,js,ts}"],
} satisfies Config;
