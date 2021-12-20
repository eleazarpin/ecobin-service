var express = require('express');
var router = express.Router();
const Sequelize = require('sequelize');
const usuario = require('../models').Usuario;

/* GET users listing. */
router.get('/', async function(req, res, next) {
  try{
    const usuarios = await usuario.findAll();
    //console.log(model);
    res.status(200).json(usuarios);
  }catch(e){
    console.log(e);
  }
  
	
});

router.post('/', async (req, res) => {
  // Create a new user
  try {
      const user = usuario.build({
        usuario: req.body.usuario,
        clave: req.body.clave,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        email: req.body.email,
        ubicacion_id: req.body.ubicacion_id,
        rol: req.body.rol
      });
      await user.setPassword(req.body.clave);
      //await user.setHashPassword(req.body.clave);
      //await user.save();
      //const token = await user.generateAuthToken()
      //res.status(201).send({ user, token })
      res.status(201).send( user);
  } catch (error) {
      console.log(error);
      res.status(400).send(error)
  }
})

module.exports = router;
