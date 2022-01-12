# Dockerfile
FROM node:lts

RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - 
RUN sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' 
RUN apt-get update && apt-get install -y google-chrome-stable

RUN mkdir /home/node/app && chown node:node /home/node/app
RUN mkdir /home/node/app/node_modules && chown node:node /home/node/app/node_modules
WORKDIR  /home/node/app
USER node

COPY --chown=node:node package.json package-lock.json ./
RUN npm ci --quiet

COPY --chown=node:node . .

ENV CHROME_BIN=/usr/bin/google-chrome