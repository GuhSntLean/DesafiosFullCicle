FROM node:12.14.0-alpine3.11

RUN apk add --no-cache bash

RUN npm config set cache /home/node/app/.npm-cache --global

COPY . /home/node/app

USER node

WORKDIR /home/node/app

EXPOSE 3000

CMD [ "npm","run", "start:dev" ]