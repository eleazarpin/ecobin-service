var express = require('express');
var router = express.Router();
const Sequelize = require('sequelize');
const { Op } = require("sequelize");
const Material = require('../models').Material;

/* GET lista centros. */
router.get('/', async function(req, res, next) {
  try{
    const materiales = await Material.findAll();
    res.status(200).json(materiales);
  }catch(e){
    console.log(e);
  }
  
});

/* GET lista centros. */
router.get('/:id', async function(req, res, next) {
  let idMaterial = parseInt(req.params.id);
  try{
    const mate = await Material.findByPk(idMaterial);
    res.status(200).json(mate);
  }catch(e){
    console.log(e);
  }
  
});



module.exports = router;
