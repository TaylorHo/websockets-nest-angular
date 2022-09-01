FROM node:16-alpine AS build

WORKDIR /dist/src/app

RUN npm cache clean --force

COPY . .
RUN npm install
RUN npm run build --prod




FROM nginx:latest AS ngi

COPY --from=build /dist/src/app/dist/frontend/* /usr/share/nginx/html/

ARG ENV
ARG DOMAIN

WORKDIR /ssl
COPY ./server/domains.ext /ssl
COPY ./server/certificates.sh /ssl
COPY ./server/certbot.sh /ssl
COPY ./server/nginx.prod.conf /ssl
COPY ./server/nginx.dev.conf /ssl

RUN /bin/bash -c 'if [[ ${ENV} == "production" ]] ; then cp ./nginx.prod.conf /etc/nginx/conf.d/default.conf ; else cp ./nginx.dev.conf /etc/nginx/conf.d/default.conf ; fi'
RUN /bin/bash -c 'if [[ ${ENV} == "production" ]] ; then chmod +x ./certbot.sh && ./certbot.sh ; else chmod +x ./certificates.sh && ./certificates.sh ; fi'

# SSL for development -> https://gist.github.com/cecilemuller/9492b848eb8fe46d462abeb26656c4f8
# SSL for production  -> https://gist.github.com/cecilemuller/a26737699a7e70a7093d4dc115915de8

EXPOSE 80 443