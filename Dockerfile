FROM node:20.3.0-alpine3.18

WORKDIR /usr/src/app

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 9000

CMD node index.js
# node index.js --bind 0.0.0.0:$PORT