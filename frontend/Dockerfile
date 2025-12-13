# Stage 1: Build
FROM node:20 AS build
WORKDIR /app
COPY ./taskhub-front/package*.json ./
RUN npm install
COPY ./taskhub-front/ .
RUN npm run build

# Stage 2: Serve
FROM nginx:alpine
COPY --from=build /app/dist/taskhub-front /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]