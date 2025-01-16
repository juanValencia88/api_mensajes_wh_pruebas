import { DataSource } from "typeorm";
import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_USER } from "./envs";

export const AppDataSource = new DataSource({
    type: "postgres", // Tipo de base de datos
    host: DB_HOST, // Dirección del host (ejemplo: localhost)
    port: 5432, // Puerto típico para PostgreSQL
    username: DB_USER, // Nombre de usuario
    password: DB_PASSWORD, // Contraseña
    database: DB_DATABASE, // Nombre de la base de datos
    synchronize: true, // Sincronizar entidades con la base de datos
    dropSchema: false, // No eliminar el esquema al reiniciar
    logging: false, // Desactivar logs por defecto
    entities: [
        // Agrega aquí las entidades de tu aplicación, ejemplo:
        // User, Message, ErrorLog, etc.
    ],
    subscribers: [
        // Agrega aquí cualquier suscriptor necesario
    ],
    migrations: [
        // Agrega aquí tus archivos de migración
    ],
});

AppDataSource.initialize()
    .then(() => {
        console.log("🚀 Conexión a la base de datos establecida exitosamente.");
    })
    .catch((error) => {
        console.error("❌ Error al conectar con la base de datos:", error);
    });
