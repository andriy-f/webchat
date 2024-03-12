FROM node:20-bookworm-slim as base
ARG PORT=8080

RUN set -ex; \
    apt-get update; \
    apt-get install -y --no-install-recommends curl; \
    apt-get clean;

WORKDIR /app

RUN chown -R node:node .

USER node
COPY package.json package-lock.json ./

HEALTHCHECK --start-period=2s CMD [ "curl", "--fail", "-sS", "http://localhost:8080/health" ]
ENV PORT=$PORT
EXPOSE $PORT
USER node

FROM base as build

# Dev set of dependencies
ENV NODE_ENV=development
RUN set -ex; \
    npm ci; \
    npm cache clean --force

COPY tsconfig.json nodemon.json ./
COPY src/ ./src
ENV NODE_ENV=production
RUN ["npm", "run", "build"]

FROM build as development
ENV NODE_ENV=development
# Allows passing system signals
CMD [ "./node_modules/.bin/nodemon" ]

FROM base as production

# Prod set of dependencies
ENV NODE_ENV=production
RUN set -ex; \
    npm ci; \
    npm cache clean --force

COPY --chown=node:node --from=build /app/dist ./dist
CMD [ "node", "./dist/index.js" ]
