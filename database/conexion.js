const mysql = require('mysql2')
require('dotenv').config({path:'./.env'})

const db = mysql.createConnection(
    {
        host:'mysql-lhk.alwaysdata.net',//process.env.DB_HOST,
        user:'lhk_free',//process.env.DB_USER,
        password:'alwaysdata123db',//process.env.DB_PASS,
        database:'lhk_cursos',//process.env.DB_NAME,
        port:3306 //process.env.DB_PORT || 3307 //agrego pipe como ej para q tome un valor si no esta definida la var de entorno 
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
