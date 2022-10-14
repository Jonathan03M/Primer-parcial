const router = require("express").Router()

const { registrarse, login, buscarUsuario, borrarUsuario } = require("../controllers/auth.controller")

router.post("/registro", registrarse)

router.get ('/user/find/:id', buscarUsuario)
router.post("/login", login)
router.delete('/user/delete/:id', borrarUsuario)







module.exports = router