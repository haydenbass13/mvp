FROM node:11

WORKDIR /
COPY package*.json /
RUN npm ci --only=production

COPY /public ./public 

EXPOSE 8000

CMD npm start
