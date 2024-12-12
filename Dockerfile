FROM node:23-alpine3.20

WORKDIR /PROY-NAROC-S.A.C

COPY package*.json ./

RUN npm ci --only=production

COPY . .

EXPOSE 3000

CMD ["npm", "start"]