import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: '0.0.0.0', // Permite acesso de qualquer interface de rede
    port: 5173,
    strictPort: false, // Tenta a próxima porta se 5173 estiver ocupada
    open: true, // Abre o navegador automaticamente
    hmr: {
      // Configurações de HMR para melhor estabilidade
      overlay: true, // Mostra erros no navegador
    },
    watch: {
      // Melhorar a detecção de mudanças
      usePolling: false,
      ignored: ['**/node_modules/**', '**/.git/**', '**/dist/**'],
    },
  },
  // Otimizações de build
  build: {
    // Aumentar chunk size para evitar muitos requests
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'ui-vendor': ['framer-motion', 'lucide-react'],
        },
      },
    },
  },
  // Otimizar dependências pré-empacotadas
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'framer-motion',
      'lucide-react',
      'sonner',
    ],
    // Forçar re-otimização se necessário
    force: false,
  },
})

