FROM docker/compose:2.20.2

WORKDIR /app

COPY docker-compose.yaml ./
COPY src ./src

CMD ["up"]

