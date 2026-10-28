import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const repository = process.env.GITHUB_REPOSITORY?.split('/')[1];
  const isUserSite = repository?.toLowerCase().endsWith('.github.io');
  const base = mode === 'production' && repository && !isUserSite ? `/${repository}/` : '/';
  return { plugins: [react()], base };
});
