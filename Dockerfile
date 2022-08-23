# Build step
FROM node:14-alpine as build
WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY . ./
RUN yarn build

# Run step
FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 8080:80
CMD ["nginx", "-g", "daemon off;"]

# FROM alpine:latest

# RUN apk update &&\
#     apk upgrade &&\
#     apk add nodejs npm yarn

# # Install app dependencies
# COPY . .

# RUN yarn install

# RUN yarn build


# EXPOSE 80

# CMD [ "yarn", "start" ]