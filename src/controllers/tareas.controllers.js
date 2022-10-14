const Tareas = require("../models/tareas.model")
const ctrl = {}

ctrl.postTarea = async(req, res)=>{
    const {titulo, descripcion} = req.body

    const nuevaTarea = new Tareas({
        titulo,
        descripcion,
        userID: req.user._id
    })

    const guardarTarea = await nuevaTarea.save();

    if(!guardarTarea){
        res.json("No se pudo crear la tarea")
    }

    res.json("Tarea creada")
}

ctrl.getTarea = async(req,res)=>{
    const obtenerTarea = await Tareas.find({userID: req.user._id, isActive: true})

    res.json(obtenerTarea)
}

ctrl.putTarea = async(req, res)=>{
    const {titulo, descripcion} = req.body
    const id = req.params.id

    const actualizarTarea = await Tareas.findByIdAndUpdate(id, {titulo, descripcion})

    if(!actualizarTarea){
        res.json("No se pudo actualizar la tarea")
    }

    res.json("Tarea actualizada")
}

ctrl.deleteTarea =  async (req,res) =>{
    const id = req.params.id;

    const eliminarTarea = await Tareas.deleteOne({_id:id,userID:req.user._id})

    res.json("Tarea eliminada" + eliminarTarea)
}
module.exports = ctrl