require("./servidor")
const conectarBD = require("./db");
const {crearGato, borrarGato, modificarGato} = require("./db/controladores/tipos")

conectarBD();

