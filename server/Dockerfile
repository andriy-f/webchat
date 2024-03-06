FROM node:20-bookworm-slim as base
ARG PORT=8080

RUN set -ex; \
    apt-get update; \
    apt-get install -y --no-install-recommends curl; \
    apt-get clean;

ENV NODE_ENV=production
WORKDIR /app

# USER node
COPY package.json package-lock.json ./
ENV NODE_ENV=development
RUN set -ex; \
    npm ci; \
    npm cache clean --force

COPY index.js ./
HEALTHCHECK --start-period=2s CMD [ "curl", "--fail", "-sS", "http://localhost:8080/health" ]
ENV PORT=$PORT
EXPOSE $PORT
USER node
CMD [ "node", "index.js" ]

FROM base as development
ENV NODE_ENV=development
CMD [ "./node_modules/.bin/nodemon" ]
