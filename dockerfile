FROM node:12.18.2 as build-step

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build --prod

FROM nginx:1.19.2

COPY --from=build-step /app/dist/Hermes /usr/share/nginx/html
