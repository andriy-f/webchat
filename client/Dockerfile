FROM node:20-bookworm-slim as base

# Prepare app dir
WORKDIR /app

# Restore packages
COPY package.json package-lock.json ./
ENV NODE_ENV development
RUN set -ex; \
  npm ci; \
  npm cache clean --force;

COPY . .

# Development
# ===========
FROM base as development
# Dev runtime config
EXPOSE 8081
ENV PORT 8081
CMD ["npm", "run", "develop-lan"]

# Unit tests
# =====
FROM base as test
RUN su-exec node env \
  NODE_ENV=test \
  CI=true \
  npm run test

# Build
# =====
FROM base as build
RUN su-exec node env NODE_ENV=production npm run build

# ==========
# Prod image
# ==========
FROM nginx:alpine as production

# Prepare app dir
WORKDIR /usr/share/nginx/html

# Copy runtime data
COPY docker-entrypoint /docker-entrypoint
COPY default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist ./
RUN mv ./index.html ./index.html.template

# Runtime config
ENTRYPOINT ["/docker-entrypoint"]
CMD ["nginx", "-g", "daemon off;"]
