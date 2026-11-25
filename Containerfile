FROM docker.io/python:alpine
# Creamos un usuario sin privilegios para cumplir con buenas prácticas de seguridad en K8sRUN addgroup -S appgroup && adduser -S appuser -G appgroup
WORKDIR /content
# Instalamos dependencias y añadimos el certificado de tu registro local
RUN apk add --no-cache curl ca-certificates
COPY ./certificados/domain.crt /usr/local/share/ca-certificates/registro-local.crt
RUN update-ca-certificates
# Copiamos el código de la aplicación asignando directamente la propiedad al usuario sin privilegios
COPY --chown=appuser:appgroup . .
# Exponemos el puerto 8080 (no privilegiado)
EXPOSE 8080
# Cambiamos al usuario sin privilegios antes de arrancar el servidor
USER appuser
CMD ["python3", "-m", "http.server", "8080", "--bind", "0.0.0.0"]

#OLD
# FROM docker.io/python:alpine
# WORKDIR /content
# RUN apk add --no-cache curl ca-certificates 
# COPY ./certificados/domain.crt /usr/local/share/ca-certificates/registro-local.crt
# RUN update-ca-certificates
# COPY . .
# CMD ["python3", "-m", "http.server", "80", "--bind", "0.0.0.0"]


