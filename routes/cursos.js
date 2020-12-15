var express = require('express');
var ruta = express.Router();

var mongoose = require('mongoose');
require('../models/modelCurso');
const Curso = mongoose.model('Curso');//Referencia al modelo

ruta.get('/', (req, res) => {
  Curso.find().then((cursos) => {
    res.json(cursos);
  }).catch((error) => {
    if (error)
      throw error;
  });
});

ruta.get('/:_id',(req, res) => {
    res.send('Encuentra un curso '+req.params.cursono);
  });
    

ruta.post('/', (req, res)=>{
  console.log(req.body);
  res.send("El curso se agregó exitosamente");
  var newCurso = {
    CursoNo: req.body.CursoNo,
    Cuatrimestre: req.body.Cuatrimestre,
    FechaInicio: req.body.FechaInicio,
    FechaFin: req.body.FechaFin,
    Nombre: req.body.Nombre,
    Descripcion: req.body.Descripcion
  }

  //Estudiante es el modelo y se le pasan los datos de newEstudiante
  var curse = new Curso(newCurso);

  //Invocamos el método de eliminar

  curse.save().then(()=>{
    console.log("El nuevo curso ha sido creado");
  }).catch((error)=>{
    if (error){
      console.log('Ha ocurrido un error al agregar el curso');
      throw error;
    }
  });
});

ruta.put('/',(req,res)=>{
    res.send('Modificando un registro');
});

ruta.delete('/:cursono',(req,res)=>{
    res.send('Eliminando un registro');
});

module.exports = ruta;