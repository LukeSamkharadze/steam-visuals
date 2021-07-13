FROM node:14

WORKDIR /steam-visuals

COPY package*.json .

RUN npm ci

COPY . .

EXPOSE 80

CMD [ "npm", "start" ]
