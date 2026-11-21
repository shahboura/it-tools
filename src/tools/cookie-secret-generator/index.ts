import { Cookie } from '@vicons/tabler';
import { translate } from '@/plugins/i18n.plugin';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: translate('tools.cookie-secret-generator.title'),
  path: '/cookie-secret-generator',
  description: translate('tools.cookie-secret-generator.description'),
  keywords: ['cookie', 'secret', 'session', 'oauth2', 'oauth2-proxy', 'csrf', 'random', 'base64', 'url-safe', 'generator'],
  component: () => import('./cookie-secret-generator.tool.vue'),
  icon: Cookie,
  createdAt: new Date('2026-11-21'),
});
