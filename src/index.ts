
import "reflect-metadata"
import { AppDataSource } from './config/data-source';
import { PORT } from "./config/envs";
import server from "./server"



AppDataSource.initialize().then(res => {
   console.log("Conexion a base dde datos establecida con exito")
}).then(res => {
    server.listen(PORT, () => {
        console.log(`server runing on port --> ${PORT}`)
    })
})