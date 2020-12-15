const mongoose = require('mongoose');
mongoose.model('Curso',{
    CursoNo:{
        type:mongoose.SchemaTypes.Number,
        require: true,
        unique: true
    },
    Cuatrimestre:{
        type:Number,
        require: true
    },
    FechaInicio:{
        type:Date,
        require: true
    },
    FechaFin:{
        type:Date,
        require: true,
    },
    Nombre:{
        type:String,
        require: true
    },
    Descripcion:{
        type:String,
        require:true
    }
});