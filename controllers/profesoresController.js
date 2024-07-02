const db = require('../database/conexion.js');

class ProfesoresController {
    consultar(req, res) {
        //res.json({msg:'Consulta profesores desde clase'});
        try {
            db.query(`SELECT * FROM profesores`,
                (err, rows) => {
                    if (err) {
                        res.status(400).send(err);
                    }
                    res.status(200).json(rows);
                });
        } catch (err) {
            res.status(500).send(err.message);
        }

    }

    consultarDetalle(req, res) {
        //res.json({msg:'Consulta detalle profesor desde clase'});
        const { id } = req.params;
        try {
            db.query(`SELECT * FROM profesores WHERE id = ?`, [id],
                (err, rows) => {
                    if (err) {
                        res.status(400).send(err);
                    }
                    res.status(200).json(rows[0]);
                });
        } catch (err) {
            res.status(500).send(err.message);
        }
    }

    ingresar(req, res) {
        //res.json({msg:'Ingresa profesor desde clase'});
        try {
            const { dni, nombre, apellido, email, profesion, telefono } = req.body;
            db.query(`INSERT INTO profesores
                        (id, dni, nombre, apellido, email, profesion, telefono)
                        VALUES(NULL, ?, ?, ?, ?, ?, ?);`,
                [dni, nombre, apellido, email, profesion, telefono], (err, rows) => {
                    if (err) {
                        res.status(400).send(err);
                    }
                    else {
                        res.status(201).json({ id: rows.insertId });
                    }
                });
        } catch (err) {
            res.status(500).send(err.message);
        }
    }

    actualizar(req, res) {
        //res.json({msg:'Actualiza profesor desde clase'});
        const { id } = req.params;
        try {
            const { dni, nombre, apellido, email, profesion, telefono } = req.body;
            db.query(`UPDATE profesores
            SET dni = ?, nombre = ?, apellido = ?, email = ?, profesion = ?, telefono = ?
            WHERE id = ?;`,
                [dni, nombre, apellido, email, profesion, telefono, id], (err, rows) => {
                    console.log(err);
                    console.log(rows);
                    if (err) {
                        res.status(400).send(err);
                    }
                    if (rows.affectedRows == 1)
                        res.status(200).json({ respuesta: 'Registro actualizado con éxito' });
                })
        } catch (err) {
            res.status(500).send(err.message);
        }
    }

    borrar(req, res) {
        //res.json({msg:'Borra profesor desde clase'});
        const { id } = req.params;
        try {
            db.query(`DELETE FROM profesores WHERE id = ?;`,
                [id], (err, rows) => {
                    if (err) {
                        res.status(400).send(err);
                    }
                    if (rows.affectedRows == 1)
                        res.status(200).json({ respuesta: 'Registro eliminado con éxito' });
                })
        } catch (err) {
            res.status(500).send(err.message);
        }
     }
}

module.exports = new ProfesoresController();