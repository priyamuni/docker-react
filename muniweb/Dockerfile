#Specify base image

FROM node:alpine

WORKDIR /use/app

# install depend/..

COPY ./package.json ./

RUN npm install

COPY ./ ./



#default command

CMD ["npm", "start"]
