const router = require("express").Router();
const { postTarea, getTarea, putTarea, deleteTarea } = require("../controllers/tareas.controllers");
const validarToken = require("../middlewares/validartoken");

router.post("/tareas", validarToken, postTarea)

router.get("/tareas", validarToken, getTarea)

router.put("/tareas/:id", validarToken, putTarea)

router.put("/eliminar/:id", validarToken, deleteTarea)

module.exports = router;