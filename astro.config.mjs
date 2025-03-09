import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  // 项目配置
  output: 'server',
  adapter: cloudflare()
}); 