const mongoose = require('mongoose');
mongoose.model('Actor',{
    Id_Actor:{
        type: mongoose.SchemaTypes.Number,
        required: [true, 'Se requiere un id para el actor o actriz'],
        unique: true
    },
    Nombre:{
        type:String,
        required: [true, 'Se require un nombre para el actor o la actriz'],
        minleght:[3, 'Se requieren al menos tres caracteres']
    },
    Apellidos:{
        type:String,
        require: [true, 'Se requieren apellidos para el actor o actriz'],
        minleght:[3, 'El número mínimo de caracteres es 3']
    },
    Edad:{
        type:Number,
        required: [true,'Indica la edad del actor o la actriz']
    },
    Nacionalidad:{
        type:String,
        require: [true, 'Debe indicar la nacionalidad del actor o actriz']
    },
    AñoInicio:{
        type:Number,
        required:[true,'Indique el año de inico de la carrera ']
    }
});