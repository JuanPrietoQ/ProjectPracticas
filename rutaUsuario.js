const {Router} = require ("express")

const router = Router()

const ObtenerUsuario = require("./ControladorUser")
const CrearUsuario = require("./ControladorUser")

router.get("/allUsuarios",ObtenerUsuario.obtenerUsuario)
router.post("/crearUsuario",CrearUsuario.crearUsuario)


module.exports=router
