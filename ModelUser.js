const conexion = require("./mysqlconnect")

const usuarioModel = function (usuario){
    this.id_usuario = usuario.id_usuario
    this.nombres = usuario.nombres
    this.direccion = usuario.direccion
    this.telefono = usuario.telefono
}

usuarioModel.obtenerUsuarios = resultado =>{
    conexion.query("Select * from usuario", (res, err)=>{
        if (err){
            resultado(null, err)
        }else{
            resultado(null, res)
        }
    })

}

usuarioModel.crearUsuarios = (crearUser,result) =>{
    conexion.query("Insert into usuario set ?", crearUser, (err,res)=>{
        if(err){
            console.log("Error al insertar los datos", err)
            result(null,err)
        }else{
            console.log(res)
            result(null,res)
        }
    })
}

module.exports = usuarioModel