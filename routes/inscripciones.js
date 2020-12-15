const express = require('express');
const mongoose = require('mongoose');


require('../models/modelEstudianteCurso');
const EstudianteCurso = mongoose.model('EstudianteCurso');


var ruta = express.Router();

ruta.get('/', (req, res) => {
    EstudianteCurso.find().then((inscripciones) => {
      res.json(inscripciones);
    }).catch((error) => {
      if (error)
        throw error;
    });
  });

ruta.post('/',(req, res) =>{
    console.log(req.body);
    var newInscripcion = {
        NumeroControl: req.body.NumeroControl,
        CursoNo: req.body.CursoNo,
        Puntuacion: req.body.Puntuacion,
        Terminado: req.body.Terminado
    }

    var matriculacion = new EstudianteCurso(newInscripcion);

    matriculacion.save().then(() =>{
        res.send("Se ha agtregado una inscripción con exito");
        console.log("Se ha agtregado una inscripción con exito");
    }).catch((err) => {
        if (err)
            throw err;
            console.log("Ocurrio un error al guardar los datos");
            res.send("Ocurrio un error al guardar los datos");
    });
});

module.exports = ruta;
