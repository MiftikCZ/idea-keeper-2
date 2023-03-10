import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import { join, parse, resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  base: "./",
  build: {
    outDir: "./docs",
    rollupOptions: {
      input:  entryPoints(
        "index.html",
        "settings.html",
      )
    }
  }
})

function entryPoints(...paths) {
  const entries = paths.map(parse).map(entry => {
    const { dir, base, name, ext } = entry;
    const key = join(dir, name);
    const path = resolve(__dirname, dir, base);
    return [key, path];
  });
  
  const config = Object.fromEntries(entries);
  return config;
}