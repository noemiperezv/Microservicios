var express = require('express');
var ruta = express.Router();
var request = require('request');

//Listado de estudiantes

//Conectando con la base de datos
var mongoose = require('mongoose');
require('../models/modelDirector');
const Director = mongoose.model('Director');//Referencia al modelo

/* GET home page.  Sirve para alistar los regístros*/
ruta.get('/', (req, res) => {
  Director.find().then((directores) => {
    res.json(directores);
  }).catch((error) => {
    if (error)
      throw error;
  });
});
//Encontrar un regístro específico
ruta.get('/:id_director', (req, res) => {
  Director.findOne({Id_Director: req.params.id_director}).then((director) => {
    res.json(director);
  }).catch((error) => {
    if (error)
      throw error;
  });
});
//Método post para agregar a un estudiante
ruta.post('/', (req, res) => {
  //res.send('Agregando un registro de estudiante');
  console.log(req.body);
  var newDirector = {
    Id_Director: req.body.Id_Director,
    Nombre: req.body.Nombre,
    Apellidos: req.body.Apellidos,
    Nacionalidad: req.body.Nacionalidad,
    Premios: req.body.Premios
  }

  //Estudiante es el modelo y se le pasan los datos de newEstudiante
  var dire = new Director(newDirector);

  //Invocamos el método de eliminar

  dire.save().then(() => {
    console.log("El director se ha agregado exitosamente");
    res.send("El director se ha agregado exitosamente");
  }).catch((error) => {
    if (error) {
      console.log("Ocurrio un error mientras se agregaba el director");
      res.send("Ocurrio un error mientras se agregaba el director");
      throw error;
    }
  });
});

//Modifica un registrode estudiante
ruta.put('/', (req, res) => {
  Director.findOne({ Id_Director: req.body.Id_Director }).then((director) => {
    director.Nacionalidad = req.body.Nacionalidad;
    director.Premios = req.body.Premios;

    director.markModified('Nacionalidad');
    director.markModified('Premios');

    director.save().then(() => {
      res.send("Se actualizarón los datos del director");
    }).catch((error) => {
      if (error)
        throw error;
    });
  }).catch((error) => {
    if (error)
      throw error;
  });
});

ruta.delete('/:id_director', (req, res) => {
  Director.findOneAndRemove({Id_Director: req.params.id_director}).then(() => {
    res.send("Se ha eliminado al director");
  }).catch((error) => {
    if (error)
      throw error;
  });
});


module.exports = ruta;