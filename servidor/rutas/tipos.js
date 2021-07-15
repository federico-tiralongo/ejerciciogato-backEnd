const express = require("express");
const Tipo = require("../../db/modelos/Tipo");
const router = express.Router();

router.get("/listado", async (req, res, next) => {
  const tipos = await Tipo.find();
  if (!tipos) {
    const otroError = new Error("No se encontro el gato buscado");
    otroError.codigo = 400;
    return next(otroError);
  }res.json(tipos);
});

router.get("/tipo/:idTipo", async (req, res, next) => {
  const { idTipo } = req.params;
  const tipo = await Tipo.findById(idTipo);
  if (!tipo) {
    const otroError = new Error(
      `No existe este tipo de gato con la id: ${idTipo}`
    );
    otroError.codigo = 400;
    return next(otroError);
  }res.json(tipo);
});

router.put("/tipo/:idTipo", async (req, res, next) => {
  const { idTipo } = req.params;
  const modificado = req.body;
  const tipoModificado = await Tipo.findByIdAndUpdate(idTipo, modificado);
  if (!tipoModificado) {
    const otroError = new Error(
      `No se puede modificar este tipo de gato con la id: ${idTipo}`
    );
    otroError.codigo = 400;
    return next(otroError);
  }
  console.log(tipoModificado);
  res.json(tipoModificado);
});

router.delete("/tipo/:idTipo", async (req, res, next) => {
  const { idTipo } = req.params;
  const tipoBorrado = await Tipo.findByIdAndDelete(idTipo);
  if (!tipoBorrado) {
    const otroError = new Error(
      `No se puede borrar este tipo de gato con la id: ${idTipo}`
    );
    otroError.codigo = 400;
    return next(otroError);
  }
  console.log(tipoBorrado);
  res.json(tipoBorrado);
});

router.post("/nuevo-tipo", async (req, res, next) => {
  const nuevoTipo = req.body;
  const nuevoTipoCreado = await Tipo.create(nuevoTipo);
  if (!nuevoTipo.tipo) {
    res
      .status(403)
      .json({ error: true, mensaje: "Seas mas especifico" });
    return;
  }
  res.status(200).json({ nuevoTipo: { tipo: nuevoTipoCreado.tipo } });
});

module.exports = router;