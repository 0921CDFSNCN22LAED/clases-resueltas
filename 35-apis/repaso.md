# Web APIS

- Interfaz de Programación de Aplicaciones.
- Una herramienta para conectar aplicaciones o sistemas
  - nos comunicamos por HTTP
  - que devuelve informacion
  - que podemos construir y consumir
  - Son publicas y/o privadas o semi-privadas

No necesariamente esta relacionado al concepto de API:

- formato JSON

## Verbos HTTP

- GET <--- NO PUEDE MODIFICAR EL SERVIDOR
- POST
- PUT
- PATCH
- DELETE

Por seguridad usamos HTTPS

## REST

- `/movies/?genre=1` -> coleccion completa de movies
- `/movies/5` -> ver datos de la pelicula con id 5
- `/movies/5/actors` -> ver los actores de la pelicula con id 5
- `/genres/1/series` -> [5,6,7]

### Ejemplo

- `POST /auth/login` -> {usuario,pass}, responder con un token
- `GET /movies` -> todas las peliculas
- `POST /movies` + datos por json -> crear una nueva pelicula
  - "Authorization": "Bearer <token>" JsonWebToken
  - "Api-Key":"<apikey>"
