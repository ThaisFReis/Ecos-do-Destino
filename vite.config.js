import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: [
            {
                find: /^@\/(.*)/,
                replacement: "/src/$1",
            },
            {
                find: "./runtimeConfig",
                replacement: "./runtimeConfig.browser",
            },
        ],
    },
    plugins: [react()],
    define: {
        global: "window",
    },
    server: {
        headers: {
            "Cross-Origin-Opener-Policy": "same-origin",
            "Cross-Origin-Embedder-Policy": "require-corp",
        },
    },
    optimizeDeps: {
        exclude: ["@ffmpeg/ffmpeg", "@ffmpeg/util"],
    },
});
