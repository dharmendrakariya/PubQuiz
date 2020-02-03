FROM node

RUN mkdir -p /src
WORKDIR /src

COPY package.json /src/
COPY . /src

RUN yarn install
RUN yarn run build

EXPOSE 3000
CMD ["yarn","start"]
