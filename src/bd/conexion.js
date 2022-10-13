const mongoose = require("mongoose")

const dbConexion = async () => {
    try {
        await mongoose.connect('mongodb+srv://m001-student:formosa2021@ipf2022.co4jpdm.mongodb.net/parcial?retryWrites=true&w=majority')
        console.log('Conectado a la base de datos')
    } catch (error) {
        console.log('No se pudo conectar a la base de datos', error)

    }
}


module.exports = dbConexion