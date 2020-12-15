const mongoose = require('mongoose');
mongoose.model('Director',{
    Id_Director:{
        type: mongoose.SchemaTypes.Number,
        required: [true, 'Se requiere una clave para el director'],
        unique: true
    },
    Nombre:{
        type:String,
        required: [true, 'Se require un nombre para el director'],
        minleght:[3, 'Se requieren al menos tres caracteres']
    },
    Apellidos:{
        type:String,
        require: [true, 'Se requieren los apellidos del director'],
        minleght:[3, 'El número mínimo de caracteres es 3']
    },
    Nacionalidad:{
        type:String,
        require: [true, 'Se require la nacionalidad del director']
    },
    Premios:{
        type:String,
        require:[true, 'Se requiere al menos un premio del director']
    }
});