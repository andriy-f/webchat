FROM node:20-bookworm-slim as base

# Prepare app dir
WORKDIR /app

# Restore packages
COPY package.json package-lock.json ./
ENV NODE_ENV development
RUN set -ex; \
  npm ci; \
  npm cache clean --force;

COPY gatsby-config.ts gatsby-browser.js postcss.config.js tailwind.config.js tsconfig.json ./
COPY static ./static
COPY src ./src

# Development
# ===========
FROM base as development
# Dev runtime config

EXPOSE 8081
ENV PORT 8081
CMD ["node_modules/.bin/gatsby", "develop", "-H", "0.0.0.0"]

# Unit tests
# =====
FROM base as test
RUN env \
  NODE_ENV=test \
  CI=true \
  npm run test

# Build
# =====
FROM base as build
ENV NODE_ENV=production
RUN npm run build

# ==========
# Prod image
# ==========
FROM nginx:alpine as production

# Prepare app dir
WORKDIR /usr/share/nginx/html

# Copy runtime data
COPY deployment/docker-entrypoint /docker-entrypoint
COPY deployment/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/public ./
RUN mv ./kchat-config.js ./kchat-config.js.template

# Runtime config
ENTRYPOINT ["/docker-entrypoint"]
CMD ["nginx", "-g", "daemon off;"]
