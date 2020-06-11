FROM node:12.14.1-alpine as builder

RUN apk update && apk add git
WORKDIR /data
COPY . ./
RUN yarn install
RUN yarn build

FROM nginx:alpine

WORKDIR /data
RUN apk --no-cache add tzdata bash ca-certificates \
    && rm -rf /tmp/* \
    && rm -rf /var/cache/apk/*

RUN rm -rf /etc/nginx/conf.d
COPY deployments/build/docker/app/files/etc/nginx/conf.d /etc/nginx/conf.d
COPY --from=builder /data/build /data