var express = require('express');
var ruta = express.Router();
var request = require('request');

//Listado de estudiantes

//Conectando con la base de datos
var mongoose = require('mongoose');
require('../models/modelEstudiante');
const Estudiante = mongoose.model('Estudiante');//Referencia al modelo

/* GET home page.  Sirve para alistar los regístros*/
ruta.get('/', (req, res) => {
  Estudiante.find().then((estudiantes) => {
    res.json(estudiantes);
  }).catch((error) => {
    if (error)
      throw error;
  });
});
//Encontrar un regístro específico
ruta.get('/:numerocontrol', (req, res) => {
  Estudiante.findOne({NumeroControl: req.params.numerocontrol}).then((estudiante) => {
    res.json(estudiante);
  }).catch((error) => {
    if (error)
      throw error;
  });
});
//Método post para agregar a un estudiante
ruta.post('/', (req, res) => {
  //res.send('Agregando un registro de estudiante');
  console.log(req.body);
  var newEstudiante = {
    NumeroControl: req.body.NumeroControl,
    Nombre: req.body.Nombre,
    Apellidos: req.body.Apellidos,
    Edad: req.body.Edad,
    Email: req.body.Email
  }

  //Estudiante es el modelo y se le pasan los datos de newEstudiante
  var student = new Estudiante(newEstudiante);

  //Invocamos el método de eliminar

  student.save().then(() => {
    console.log("El nuevo estudiante ha sido creado");
    res.send("El nuevo estudiante ha sido creado");
  }).catch((error) => {
    if (error) {
      console.log("Ha ocurrido un error al agregar al estudiante");
      res.send("Ha ocurrido un error al agregar al estudiante");
      throw error;
    }
  });
});

//Modifica un registrode estudiante
ruta.put('/', (req, res) => {
  Estudiante.findOne({ NumeroControl: req.body.NumeroControl }).then((estudiante) => {
    estudiante.Nombre = req.body.Nombre;
    estudiante.Apellidos = req.body.Apellidos;

    estudiante.markModified('Nombre');
    estudiante.markModified('Apellidos');

    estudiante.save().then(() => {
      res.send("El estudiante ha sido modificado exitosamente");
    }).catch((error) => {
      if (error)
        throw error;
    });
  }).catch((error) => {
    if (error)
      throw error;
  });
});

ruta.delete('/:numerocontrol', (req, res) => {
  Estudiante.findOneAndRemove({NumeroControl: req.params.numerocontrol}).then(() => {
    res.send("El estudiante se ha eliminado exitosamente");
  }).catch((error) => {
    if (error)
      throw error;
  });
});


module.exports = ruta;
