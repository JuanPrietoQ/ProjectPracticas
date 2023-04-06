const mysql = require("mysql")
const configure = require ("./Configuracion")


const conexion = mysql.createConnection({

    host:configure.host,
    user:configure.user,
    password:configure.password,
    database:configure.database


    //host:"localhost",
    //database:"test",
    //User: "root",
    //password:"root"
})

conexion.connect(err=>{
    if (err){
        console.log(err)
        throw err;
    }
    console.log("Conectado a MySQL")

})

module.exports = conexion;