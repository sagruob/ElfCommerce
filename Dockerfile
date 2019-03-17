FROM node:alpine

WORKDIR /app/elfcommerce

# Not to build an intermediate container for yarn install
# if there's no changes to package.json
COPY ./package.json /app/elfcommerce/package.json

RUN yarn install

COPY ./ /app/elfcommerce

CMD ["node", "app.local.js"]