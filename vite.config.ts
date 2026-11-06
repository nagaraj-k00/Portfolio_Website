import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    // Dev-only: sandbox Vite doesn't serve Lovable CDN assets; proxy to hosted preview.
    proxy: {
      "/__l5e": {
        target: "https://id-preview--a48a8f54-9bca-4ef0-9a24-6d56c26817d7.lovable.app",
        changeOrigin: true,
      },
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
