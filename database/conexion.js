const mysql = require('mysql2')
require('dotenv').config({path:'./.env'})

const db = mysql.createConnection(
    {
        host:process.env.DATABASE_HOST,
        user:process.env.DATABASE_USERNAME,
        password:process.env.DATABASE_PASSWORD,
        database:process.env.DATABASE_NAME,
        port: 3306 
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
