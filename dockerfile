FROM node:14

WORKDIR /steam-visuals

COPY . .

RUN npm ci

EXPOSE 8080

CMD [ "npm", "start" ]
