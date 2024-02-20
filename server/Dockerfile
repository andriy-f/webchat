FROM node:20-bookworm-slim

ENV NODE_ENV production
WORKDIR /app

# USER node
COPY package.json package-lock.json ./
ENV NODE_ENV=development
RUN set -ex; \
    npm ci; \
    npm cache clean --force

COPY index.js ./
USER node
CMD [ "node", "index.js" ]
