const mongoose = require('mongoose');
mongoose.model('Estudiante',{
    NumeroControl:{
        type: mongoose.SchemaTypes.Number,
        required: [true, 'Se requiere un número de control'],
        unique: true
    },
    Nombre:{
        type:String,
        required: [true, 'Se require un nombre para el estudiante'],
        lowercase: true,
        minleght:[3, 'Se requieren al menos tres caracteres']
    },
    Apellidos:{
        type:String,
        lowercase:true,
        require: [true, 'Se requieren apellidos para el estudiante'],
        minleght:[3, 'El número mínimo de caracteres es 3']
    },
    Edad:{
        type:Number,
        required: true,
        min:[1, 'La edad mínima es de 1'],
        max:[120, 'La edad máxima es de 120']
    },
    Email:{
        type:String,
        lowercase:true,
        require: [true, 'Se require de un correo electrónico']
    }
});