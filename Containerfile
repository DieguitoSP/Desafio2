FROM docker.io/python:alpine
WORKDIR /content
COPY . .
COPY ./certificados/domain.crt /usr/local/share/ca-certificates/registro-local.crt
RUN apk add curl
RUN apk add --no-cache ca-certificates && update-ca-certificates
CMD ["python3", "-m", "http.server", "80", "--bind", "0.0.0.0"]
