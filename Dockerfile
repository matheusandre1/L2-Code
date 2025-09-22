FROM docker:24.0.5-dind


RUN apk add --no-cache python3 py3-pip bash \
 && pip3 install docker-compose

WORKDIR /app


COPY docker-compose.yaml ./
COPY src ./src

CMD ["docker-compose", "up"]
