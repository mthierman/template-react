import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
import { CommonServerOptions, UserConfig, defineConfig } from "vite";

const userConfig: UserConfig = {
    base: "./",
    plugins: [react(), tailwindcss()],
    resolve: {
        alias: {
            components: resolve("src/components"),
            css: resolve("src/css"),
        },
    },
};

const commonServerOptions: CommonServerOptions = {
    https: {
        pfx: resolve("../.cert/localhost.pfx"),
        passphrase: "localhost",
    },
};

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
    switch (command) {
        case "serve": {
            return {
                ...userConfig,
                server: { ...commonServerOptions },
                preview: { ...commonServerOptions },
            };
        }
        case "build": {
            return {
                ...userConfig,
            };
        }
    }
});
