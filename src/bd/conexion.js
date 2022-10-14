const mongoose = require("mongoose")

const dbConexion = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@ipf2022.co4jpdm.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`)
        console.log('Conectado a la base de datos')
    } catch (error) {
        console.log('No se pudo conectar a la base de datos', error)

    }
}


module.exports = dbConexion