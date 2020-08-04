FROM node:alpine

WORKDIR /usr/app

COPY package.json ./

RUN yarn

COPY . .

ENTRYPOINT ["sh", "run.sh"]
