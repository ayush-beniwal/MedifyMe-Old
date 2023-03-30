import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";
import httpProxy from "http-proxy";

dotenv.config();

function createMyProxy() {
  return httpProxy.createProxy({
    target: "https://medifyme-backend.onrender.com",
    changeOrigin: true,
    pathRewrite: { "^/server": "" },
  });
}

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/server": {
        target: "https://medifyme-backend.onrender.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/server/, ""),
        createProxy: createMyProxy,
      },
    },
  },
});
