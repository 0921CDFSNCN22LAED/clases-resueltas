`/movies/add`

1. encontrar todos los generos `Genres.findAll()`
2. renderizar moviesAdd con esos generos
3. mediante un for renderizar las opciones del select en base a esos generos

`/movies/edit/:id (GET)`

1. encontrar todos los generos `Genres.findAll()`
1. encontrar la pelicula a modificar
1. renderizar moviesEdit con esos generos y esa pelicula
1. mediante un for renderizar las opciones del select en base a esos generos

`/movies/delete/:id (DELETE)`

1. encontrar la peli a borrar `Movie.findbyPk`
2. limpiar los actores relacionados a esa movie `movie.setActors([])`
