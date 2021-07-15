const express = require("express");
const app = require("./init");
const { errorGeneral, error404 } = require("./errores");
const morgan = require("morgan");
const rutasTipos = require("./rutas/tipos");
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));


app.use("/tipos", rutasTipos);

app.use(error404);
app.use(errorGeneral);