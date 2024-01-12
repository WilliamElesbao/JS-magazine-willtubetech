import tailwindcss from "tailwindcss";
import { resolve } from "path";
import { defineConfig } from "vite";
import { checkPrime } from "crypto";

export default defineConfig({
    base:"/JS-magazine-willtubetech/",
    plugins: [],
    resolve: {
        /*something*/
    },
    css: {
        postcss: {
            plugins: [tailwindcss],
        },
    },
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "./index.html"),
                checkout: resolve(__dirname, "./checkout.html"),
                orders: resolve(__dirname, "./orders.html")
            },
        },
    },
});