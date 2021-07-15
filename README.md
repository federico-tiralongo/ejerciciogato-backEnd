# Ejercicio API tipos de gatos

En este ejercicio crearás una API para listar, crear, modificar y borrar alumnos de una base de tipos de gatos. Para probar la API utilizarás la aplicación React que hicimos en el ejercicio 7.

1. Crea una base de datos mongo con una colección llamada `tipos`.
2. Vuelca en la colección el JSON que viene con el ejercicio.
3. Crea una API REST con Node y Express.
4. Haz que la API se conecte a tu base de datos Mongo.
5. Crea cinco métodos que _hablen_ con la base de datos:

- `listarTipos()`
- `mostrarTipo(idTipo)`
- `crearTipo(nuevoTipo)`
- `modificarTipo(tipoModificado)`
- `borrarTipo(idTipo)`

4. Crea los siguientes endpoints, que llamarán a los métodos anteriores.

(GET) /tipos/listado
(GET) /tipos/tipo/:id
(POST) /tipos/nuevo-tipo
(PUT) /tipos/tipo/:id
(DELETE) /tipos/tipo/:id
