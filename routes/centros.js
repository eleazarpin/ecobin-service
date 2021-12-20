var express = require('express');
var router = express.Router();
const Sequelize = require('sequelize');
const { Op } = require("sequelize");
const Centro = require('../models').CentroReciclaje;
const Municipio = require('../models').Municipio;
const Horario = require('../models').HorarioApertura;
const Procesamiento = require('../models').TipoProcesamiento;
const Material = require('../models').Material;

const { body, validationResult } = require('express-validator');


/* GET lista centros. */
router.get('/', async function(req, res, next) {
  
  let where = {};
  let whereMaterial = {};
  let coordDistance = 0.03;
  const { material,coord,municipio,term } = req.query;

  if(term){
    where["nombre"] = {[Op.substring]:term};
  }
  if(material){
    whereMaterial["id"] =  material;
  }
  if(coord){
    // buscar los centros dentro del radio de coordenadas

    let coordArray = coord.split(",");
    where["lat"] =  {
      [Op.gte]: coordArray[0]-coordDistance,                             
      [Op.lte]: coordArray[0]+coordDistance, 
    };
    where["lng"] =  {
      [Op.gte]: coordArray[1]-coordDistance,                             
      [Op.lte]: coordArray[1]+coordDistance, 
    };
  }
  if(municipio){
    where["municipio_id"] = municipio;
  }

  try{
    const centros = await Centro.findAll({where:where, include: [
      "horarios",{model:Material, as:"materiales", where:whereMaterial}
    ] });
    //console.log(model);
    res.status(200).json(centros);
  }catch(e){
    console.log(e);
  }
  
});

/* GET lista centros. */
router.get('/:id', async function(req, res, next) {
  let idCentro = parseInt(req.params.id);
  try{
    const centros = await Centro.findByPk(idCentro,{ include: ["horarios","materiales"] });
    //console.log(model);
    res.status(200).json(centros);
  }catch(e){
    console.log(e);
  }
  
});

/* DELETE borra un centro. */
router.delete('/:id', async function (req, res, next) {
  let idCentro = parseInt(req.params.id);
  
  try{
    await Horario.destroy({ where: { centro_id: idCentro }});
    await Procesamiento.destroy({ where: { centro_id: idCentro }});
    const centros = await Centro.destroy({ where: { id: idCentro }});
    //console.log(model);
    res.status(200).json(centros);
  }catch(e){
    console.log(e);
  }
  
 });


/* POST nuevo centro. */
router.post('/', [
  
  body('nombre').trim().not().isEmpty(),
  body('calle').trim().not().isEmpty(),
  body('numero').isNumeric({no_symbols: false}).trim().not().isEmpty(),
  body('lat').isDecimal({decimal_digits:6}).trim().not().isEmpty(),
  body('lng').isDecimal({decimal_digits:6}).trim().not().isEmpty(),
  body('descripcion').trim(),
  body('municipio_id').custom(value => {
    return Municipio.findByPk(value).then(user => {
      if (!user) {
        return Promise.reject('Municipio doesnt exist.');
      }
    });
  })], async function(req, res, next) {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  let materiales = [];
  req.body.materiales.forEach(value => materiales.push({material_id:value}));

  try{
    const newCentro = await Centro.create({
    //const newCentro = await Centro.build({
      nombre:req.body.nombre,
      calle:req.body.calle,
      numero:req.body.numero,
      municipio_id:req.body.municipio_id,
      lat:req.body.lat,
      lng:req.body.lng,
      descripcion:req.body.descripcion,
      horarios:req.body.horarios,
      tipo_procesamiento:materiales
    },
    {
      include: ["horarios","tipo_procesamiento"]
    });
    console.log(newCentro.toJSON());
    res.status(200).json(newCentro);
  }catch(e){
    console.log(e);
  }
  
});

module.exports = router;
