const mysql = require('mysql2')
//require('dotenv').config({path:'./.env'})
require('dotenv').config()
const db = mysql.createConnection(
    {
        host:process.env.DB_HOST,
        user:process.env.DB_USER,
        password:process.env.DB_PASS,
        database:process.env.DB_NAME,
        port:process.env.DB_PORT
    }
);

db.connect((err)=>{
    if(err){
        throw err;
    }
    console.log('Base de datos conectada')
});

module.exports = db;

//##################################### Ejemplos creacion en db SQL #####################################
// CREATE TABLE cursos_estudiantes(
// 		curso_id int,
//     	estudiante_id int,
// 		PRIMARY KEY (curso_id,estudiante_id)
// );

// ALTER TABLE cursos.cursos_estudiantes
// ADD CONSTRAINT cursos_estudiantes_cursos_FK
// FOREIGN KEY (curso_id) REFERENCES cursos.cursos(id);

// ALTER TABLE cursos.cursos_estudiantes
// ADD CONSTRAINT cursos_estudiantes_estudiantes_FK
// FOREIGN KEY (estudiante_id) REFERENCES cursos.estudiantes(id);
