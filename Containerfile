FROM docker.io/python:alpine
WORKDIR /content
RUN apk add --no-cache curl ca-certificates 
COPY ./certificados/domain.crt /usr/local/share/ca-certificates/registro-local.crt
RUN update-ca-certificates
COPY . .
CMD ["python3", "-m", "http.server", "80", "--bind", "0.0.0.0"]
