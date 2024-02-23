FROM node:20-alpine

WORKDIR /src

COPY package*.json ./
COPY yarn.lock ./

RUN yarn

COPY . .

EXPOSE 4200

CMD yarn start
