import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  // Use conditional base path depending on environment
  base: '/',

  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) {
              return 'vendor-react';
            }
            if (id.includes('@radix-ui')) {
              return 'vendor-ui';
            }
            if (id.includes('i18next') || id.includes('react-i18next')) {
              return 'vendor-i18n';
            }
            if (id.includes('@tanstack/react-query')) {
              return 'vendor-query';
            }
            if (id.includes('clsx') || id.includes('tailwind-merge') || id.includes('class-variance-authority')) {
              return 'vendor-utils';
            }
          }
          if (id.includes('/src/components/sections/')) {
            return 'app-sections';
          }
          if (id.includes('/src/components/ui/')) {
            return 'app-components-ui';
          }
          if (id.includes('/src/components/layout/')) {
            return 'app-components-layout';
          }
          if (id.includes('/src/components/theme/')) {
            return 'app-components-theme';
          }
          if (id.includes('/src/hooks/')) {
            return 'app-hooks';
          }
          if (id.includes('/src/lib/')) {
            return 'app-utils';
          }
        },
        // Optimize chunk size
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      },
    },
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000,
    // Enable minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // Enable source maps in production
    sourcemap: true,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Optimize development server
  server: {
    hmr: true,
    watch: {
      usePolling: true,
    },
  },
});