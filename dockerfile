FROM node:14

WORKDIR /steam-visuals

COPY . .

RUN npm ci

EXPOSE 80

CMD [ "npm", "start" ]
