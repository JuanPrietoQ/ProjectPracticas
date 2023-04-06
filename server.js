const servidor = require("express");

const app = servidor()

const bodyParser = require ("body-parser");
const conexion = require("./mysqlconnect");
const rutaUser = require("./rutaUsuario")




//usar proceso en mi app
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
//app.use("/mysqul.js",conexion)
app.use("/usuarios", rutaUser)
app.use("/crear",rutaUser)



//asignar puerto del servidor
var port  = process.env.PORT || 3000

app.listen(port,()=>{
    console.log("Servido inciado en el puerto: ", port)
})

console.log()