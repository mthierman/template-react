import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig, UserConfig } from "vite";

const defaults: UserConfig = {
    plugins: [react()],
    base: "./",
    root: "src",
    build: {
        outDir: "../build",
    },
    resolve: {
        alias: {
            "@components": path.resolve("src/components"),
            "@css": path.resolve("src/css"),
        },
    },
};

const server: UserConfig["server"] = {
    port: 8000,
    https: {
        pfx: path.resolve("../.cert/localhost.pfx"),
        passphrase: "localhost",
    },
};

// https://vitejs.dev/config/
export default defineConfig(async ({ mode }) => {
    switch (mode) {
        case "development":
            return {
                ...defaults,
                server: { ...server },
                preview: { ...server },
            };
        default:
            return {
                ...defaults,
            };
    }
});
