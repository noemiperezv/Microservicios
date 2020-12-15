var express = require('express');
var ruta = express.Router();
var request = require('request');

//Listado de estudiantes

//Conectando con la base de datos
var mongoose = require('mongoose');
require('../models/modelPelicula');
const Pelicula = mongoose.model('Pelicula');//Referencia al modelo

/* GET home page.  Sirve para alistar los regístros*/
ruta.get('/', (req, res) => {
  Pelicula.find().then((peliculas) => {
    res.json(peliculas);
  }).catch((error) => {
    if (error)
      throw error;
  });
});
//Encontrar un regístro específico
ruta.get('/:id_pelicula', (req, res) => {
  Pelicula.findOne({Id_Pelicula: req.params.id_pelicula}).then((pelicula) => {
    res.json(pelicula);
  }).catch((error) => {
    if (error)
      throw error;
  });
});
//Método post para agregar a un estudiante
ruta.post('/', (req, res) => {
  //res.send('Agregando un registro de estudiante');
  console.log(req.body);
  var newPelicula = {
    Id_Pelicula: req.body.Id_Pelicula,
    Titulo: req.body.Titulo,
    Nombre_Director: req.body.Nombre_Director,
    Nombre_Actor: req.body.Nombre_Actor,
    Categoria: req.body.Categoria,
    Año: req.body.Año
  }

  //Estudiante es el modelo y se le pasan los datos de newEstudiante
  var movie = new Pelicula(newPelicula);

  //Invocamos el método de eliminar

  movie.save().then(() => {
    console.log("La película se ha agregado exitosamente");
    res.send("La película se ha agregado exitosamente");
  }).catch((error) => {
    if (error) {
      console.log("Ocurrio un error mientras se agregaba la película");
      res.send("Ocurrio un error mientras se agregaba la película");
      throw error;
    }
  });
});

//Modifica un registrode estudiante
ruta.put('/', (req, res) => {
  Pelicula.findOne({ Id_Pelicula: req.body.Id_Pelicula }).then((pelicula) => {
    pelicula.Categoria = req.body.Categoria;
    pelicula.Año = req.body.Año;

    pelicula.markModified('Categoria');
    pelicula.markModified('Año');

    pelicula.save().then(() => {
      res.send("Se actualizarón los datos de la película");
    }).catch((error) => {
      if (error)
        throw error;
    });
  }).catch((error) => {
    if (error)
      throw error;
  });
});

ruta.delete('/:id_pelicula', (req, res) => {
  Pelicula.findOneAndRemove({Id_Pelicula: req.params.id_pelicula}).then(() => {
    res.send("Se ha eliminado la película");
  }).catch((error) => {
    if (error)
      throw error;
  });
});


module.exports = ruta;