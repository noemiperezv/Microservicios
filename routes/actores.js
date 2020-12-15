var express = require('express');
var ruta = express.Router();
var request = require('request');

//Listado de estudiantes

//Conectando con la base de datos
var mongoose = require('mongoose');
require('../models/modelActor');
const Actor = mongoose.model('Actor');//Referencia al modelo

/* GET home page.  Sirve para alistar los regístros*/
ruta.get('/', (req, res) => {
  Actor.find().then((actores) => {
    res.json(actores);
  }).catch((error) => {
    if (error)
      throw error;
  });
});
//Encontrar un regístro específico
ruta.get('/:id_actor', (req, res) => {
  Actor.findOne({Id_Actor: req.params.id_actor}).then((actor) => {
    res.json(actor);
  }).catch((error) => {
    if (error)
      throw error;
  });
});
//Método post para agregar a un estudiante
ruta.post('/', (req, res) => {
  //res.send('Agregando un registro de estudiante');
  console.log(req.body);
  var newActor = {
    Id_Actor: req.body.Id_Actor,
    Nombre: req.body.Nombre,
    Apellidos: req.body.Apellidos,
    Edad: req.body.Edad,
    Nacionalidad: req.body.Nacionalidad,
    AñoInicio: req.body.AñoInicio
  }

  //Estudiante es el modelo y se le pasan los datos de newEstudiante
  var act = new Actor(newActor);

  //Invocamos el método de eliminar

  act.save().then(() => {
    console.log("El actor se ha agregado exitosamente");
    res.send("El actor se ha agregado exitosamente");
  }).catch((error) => {
    if (error) {
      console.log("Ocurrio un error mientras se agregaba el actor");
      res.send("Ocurrio un error mientras se agregaba el actor");
      throw error;
    }
  });
});

//Modifica un registrode estudiante
ruta.put('/', (req, res) => {
  Actor.findOne({ Id_Actor: req.body.Id_Actor }).then((actor) => {
    actor.Nacionalidad = req.body.Nacionalidad;
    actor.Edad = req.body.Edad;
    actor.AñoInicio = req.body.AñoInicio;

    actor.markModified('Nacionalidad');
    actor.markModified('Edad');
    actor.markModified('AñoInicio');

    actor.save().then(() => {
      res.send("Se actualizarón los datos del actor");
    }).catch((error) => {
      if (error)
        throw error;
    });
  }).catch((error) => {
    if (error)
      throw error;
  });
});

ruta.delete('/:id_actor', (req, res) => {
  Actor.findOneAndRemove({Id_Actor: req.params.id_actor}).then(() => {
    res.send("Se ha eliminado al actor");
  }).catch((error) => {
    if (error)
      throw error;
  });
});


module.exports = ruta;