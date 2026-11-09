import express from 'express';
import router from './routers';
import db from './config/db';
import colors from 'colors';
//Conectar a la base de datos
async function conectar_base_datos() {
    try {
        await db.authenticate();
        db.sync();
        console.log(colors.bgCyan('Base de datos conectada'));
    } catch(error){
        console.log(colors.bgRed.white('Error al conectar a la base de datos: ') + error);
    }
}
conectar_base_datos()
//En esta variable se soporta toda la configuracion
const server = express();
//Leer datos de formulario
server.use(express.json());

server.use('/api/products', router);
//Routing 
export default server;