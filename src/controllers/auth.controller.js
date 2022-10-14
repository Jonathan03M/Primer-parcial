const Usuario = require("../models/usuarios.model")
const bcrypt = require("bcrypt")
const generartoken = require("../helpers/generartoken")
const tareasModel = require("../models/tareas.model")
const ctrl = {}


ctrl.registrarse = async(req, res)=>{
    const {usuario, correo, contraseña} = req.body

    const contraseñaCifrada = bcrypt.hashSync(contraseña, 10)

    const nuevoUsuario = new Usuario({
        usuario,
        correo,
        contraseña: contraseñaCifrada
    })

    const guardarUsuario = await nuevoUsuario.save()

    if(!guardarUsuario){
        res.json("Error al crear usuario")
    }

    res.json("Usuario creado")
}

ctrl.login = async(req, res)=>{
    const {usuario, contraseña} = req.body

    const user = await Usuario.findOne({usuario})
    
    if(!user){
        res.json("Usuario no encontrado")
    }

    const validarContraseña = bcrypt.compareSync(contraseña, user.contraseña)

    if(!validarContraseña){
        res.json("Contraseña incorrecta")
    }

    const token = await generartoken({uid: user._id});

    res.json(token);

}

ctrl.buscarUsuario = async (req, res) => { 
        const user = await Usuario.findById(req.params.id)
    res.json(user)
        } 

ctrl.borrarUsuario = async (req, res) => { 
    try {
        const borrar = await Usuario.findByIdAndDelete(req.params.id, {usuario:req.Usuario})
        const tareaborrar = await tareasModel.findOneAndDelete(req.userId, {_id:req.tareasModel})
        res.json('Se borro el usuario correctamente')
    } catch (error) {
        res.status(400)
    }}



module.exports = ctrl