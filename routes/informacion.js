var express = require('express');
var router = express.Router();
const Sequelize = require('sequelize');
const { Op } = require("sequelize");
const TipoInfo = require('../models').TipoInformacion;
const Informacion = require('../models').InformacionReutilizacion;
const Material = require('../models').Material;

const { body, validationResult } = require('express-validator');


/* GET lista centros. */
router.get('/', async function(req, res, next) {
  
  let where = {};
  let whereMaterial = {};

  const { material,term } = req.query;

  if(term){
    where["titulo"] = {[Op.substring]:term};
  }
  if(material){
    whereMaterial["id"] =  material;
  }


  try{
    const infos = await Informacion.findAll({where:where, include: [
      {model:Material, as:"materiales", where:whereMaterial}
    ] });
    //console.log(model);
    res.status(200).json(infos);
  }catch(e){
    console.log(e);
  }
  
});

/* GET lista centros. */
router.get('/:id', async function(req, res, next) {
  let idInfo = parseInt(req.params.id);
  try{
    const infos = await Informacion.findByPk(idInfo,{ include: ["materiales"] });
    //console.log(model);
    res.status(200).json(infos);
  }catch(e){
    console.log(e);
  }
  
});

/* DELETE borra un centro. */
router.delete('/:id', async function (req, res, next) {
  let idInfo = parseInt(req.params.id);
  
  try{
    await TipoInfo.destroy({ where: { info_id: idInfo }});
    const info = await Informacion.destroy({ where: { id: idInfo }});
    //console.log(model);
    res.status(200).json(info);
  }catch(e){
    console.log(e);
  }
  
 });


/* POST nuevo centro. */
router.post('/', [
  
  body('titulo').trim().not().isEmpty(),
  body('descripcion').trim().not().isEmpty(),
  body('dificultad').isNumeric({no_symbols: false}).trim().not().isEmpty(),
  ], async function(req, res, next) {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  let materiales = [];
  req.body.materiales.forEach(value => materiales.push({material_id:value}));

  try{
    const newInfo = await Informacion.create({
    //const newInfo = await Centro.build({
      titulo:req.body.titulo,
      dificultad:req.body.dificultad,
      descripcion:req.body.descripcion,
      tipo_informacion:materiales
    },
    {
      include: ["tipo_informacion"]
    });
    console.log(newInfo.toJSON());
    res.status(200).json(newInfo);
  }catch(e){
    console.log(e);
  }
  
});

module.exports = router;
