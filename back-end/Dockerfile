FROM node:16

WORKDIR /app

COPY . .

EXPOSE 5000

RUN npm i

RUN npm run build

CMD ["npm", "start"]
