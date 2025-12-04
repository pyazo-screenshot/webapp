FROM node:24 AS builder

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .
RUN yarn build

FROM nginx:latest

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

COPY --from=builder /app/build/ /app/
COPY nginx.conf /etc/nginx/conf.d/default.conf
