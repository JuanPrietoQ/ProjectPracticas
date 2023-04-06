const usuarioModel = require("./ModelUser")


const obtenerUsuario = (req,res)=>{
    usuarioModel.obtenerUsuarios((err,data)=>{
        if(err){
            res.status(500).json({mensaje:"Error"})
        }else{
            res.send(data)
        }
    })
}

const crearUsuario = (req,res)=>{
    const crearUsua = new usuarioModel({
        id_usuario : req.body.id_usuario,
        nombres : req.body.nombres,
        direccion : req.body.direccion,
        telefono : req.body.telefono
    })
    usuarioModel.crearUsuarios(crearUsua,(err,data)=>{
        if (err){
            console.log("No se guardaron los datos")
            res.status(500).json({mensaje:"Error al crear"})
        
        }else{
            res.send(data)
            console.log("Se guardaron los datos", data.body)
        }
    })

}

module.exports={obtenerUsuario,crearUsuario}