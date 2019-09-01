FROM node:10.15-alpine

WORKDIR /app

COPY . ./

RUN yarn

ENTRYPOINT ["node", "src/index.js"]

CMD ["-h"]
