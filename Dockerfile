FROM node:lts

RUN npm install -g @angular/cli

RUN mkdir /app
USER node
WORKDIR /app

CMD ["ng" , "serve", "--watch", "--configuration", "development", "--host", "0.0.0.0"]
