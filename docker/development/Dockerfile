# syntax=docker/dockerfile:1
FROM node

ENV NODE_ENV=development

WORKDIR /app


COPY ["package.json", "./"]

RUN yarn install

COPY . .


RUN yarn build

EXPOSE 3000

ENTRYPOINT [ "yarn", "start" ]

