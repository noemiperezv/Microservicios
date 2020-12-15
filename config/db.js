const mongoose = require('mongoose');

const MONGOURI = 'mongodb+srv://noemi:linux@cluster0.wdylp.mongodb.net/Microservices?retryWrites=true&w=majority'

const MongoServer = async() => {
    try {
        await mongoose.connect(MONGOURI, {
            useNewUrlParser: true
        });
        console.log("Conectado a la Base de Datos !!");
    } catch (e) {
        console.log(e);
        throw e;
    }
};
 
module.exports =MongoServer;

