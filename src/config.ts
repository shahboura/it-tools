const appEnvValues = ['production', 'development', 'preview', 'test'] as const;
type AppEnv = typeof appEnvValues[number];

const envValue = import.meta.env.VITE_VERCEL_ENV;
const appEnv: AppEnv = appEnvValues.includes(envValue as AppEnv) ? (envValue as AppEnv) : 'development';

export const config = {
  app: {
    version: import.meta.env.PACKAGE_VERSION || '0.0.0',
    lastCommitSha: import.meta.env.VITE_VERCEL_GIT_COMMIT_SHA || '',
    baseUrl: import.meta.env.BASE_URL || '/',
    env: appEnv,
  },
};
