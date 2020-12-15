const mongoose = require('mongoose');
mongoose.model('Pelicula',{
    Id_Pelicula:{
        type: mongoose.SchemaTypes.Number,
        required: [true, 'Se requiere un id para la película'],
        unique: true
    },
    Titulo:{
        type:String,
        required: [true, 'Indique el título de la película'],
        minleght:[3, 'Se requieren al menos tres caracteres']
    },
    Nombre_Director:{
        type:String,
        require: [true, 'Indique el director de la película'],
        minleght:[3, 'El número mínimo de caracteres es 3']
    },
    Nombre_Actor:{
        type:String,
        required: [true,'Indique uno de los actores que participaron en la película']
    },
    Año:{
        type:Number,
        required:[true, 'Ingrese el año de la película']
    },
    Categoria:{
        type:String,
        require: [true, 'Indique la categoría de la película']
    }
});