FROM node:21.7-alpine3.19

WORKDIR /app

COPY package*.json ./
RUN npm install

# srcディレクトリをコンテナにコピー
COPY src ./src
COPY node_modules ./node_modules

CMD npm run dev
