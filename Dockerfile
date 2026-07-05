# build stage
# Pin to builder's native platform to avoid QEMU emulation for Vite/Rolldown (Rust native binaries)
FROM --platform=$BUILDPLATFORM node:lts-alpine AS build-stage
# Set environment variables for non-interactive npm installs
ENV NPM_CONFIG_LOGLEVEL=warn
ENV CI=true
ARG VITE_VERCEL_GIT_COMMIT_SHA
ENV VITE_VERCEL_GIT_COMMIT_SHA=$VITE_VERCEL_GIT_COMMIT_SHA
ARG VITE_RELEASE_TAG
ENV VITE_RELEASE_TAG=$VITE_RELEASE_TAG
WORKDIR /app
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN corepack enable && pnpm i --frozen-lockfile
COPY . .
RUN pnpm build

# production stage
FROM nginx:stable-alpine-slim AS production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
