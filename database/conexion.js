const mysql = require('mysql2')

const db = mysql.createConnection(
    {
        host:'localhost',
        port:'3307',
        user:'root',
        password:'',
        database:'cursos'
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
// 		ADD CONSTRAINT cursos_estudiantes_cursos_FK
// FOREIGN KEY (curso_id) REFERENCES cursos.cursos(id);

// ALTER TABLE cursos.cursos_estudiantes
// 		ADD CONSTRAINT cursos_estudiantes_estudiantes_FK
// FOREIGN KEY (estudiante_id) REFERENCES cursos.estudiantes(id);
