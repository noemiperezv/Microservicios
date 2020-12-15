const mongoose = require ('mongoose');
mongoose.model('EstudianteCurso',{
    NumeroControl:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Estudiante',
        require: true
    },
    CursoNo:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Curso',
        require:true
    },
    Terminado:{
        type: mongoose.SchemaTypes.Boolean,
        require: true,
        default: false
    },
    Puntuacion:{
        type:Number,
        require: true
    }
    
});