FROM node:21.7-alpine3.19

WORKDIR /app

COPY package*.json ./
RUN npm install

CMD npm run dev
