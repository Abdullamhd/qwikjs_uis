# Stage 1 - Install dependencies and build the app in a build environment
FROM docker.io/library/node:18 AS build-env

RUN mkdir /app
WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

# Stage 2 - Create the run-time image
FROM docker.io/library/node:18-slim

RUN mkdir /app
WORKDIR /app

COPY --from=build-env /app /app

# Expose port 3000
EXPOSE 3000

CMD ["npm", "run", "serve"]
