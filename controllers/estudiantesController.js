//const db = require('../database/conexion.js');

class EstudiantesController {
    constructor() {

    }

    consultar(req, res) {
        //res.json({msg:'Consulta estudiantes desde clase'});
        try {
            db.query(`SELECT * FROM estudiantes`,
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
        // const{ id } = req.params;
        // res.json({msg:`Consulta detalle estudiante desde clase ${id}`});
        const { id } = req.params;
        try {
            db.query(`SELECT * FROM estudiantes WHERE id = ?`, [id],
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
        //res.json({msg:'Ingresa estudiante desde clase'});
        try {
            const { dni, nombre, apellido, email } = req.body;
            db.query(`INSERT INTO estudiantes
                        (id, dni, nombre, apellido, email)
                        VALUES(NULL, ?, ?, ?, ?);`,
                [dni, nombre, apellido, email], (err, rows) => {
                    if (err) {
                        res.status(400).send(err);
                    }
                    if (rows.insertId)
                        res.status(201).json({ id: rows.insertId });
                });
        } catch (err) {
            res.status(500).send(err.message);
        }
    }

    actualizar(req, res) {
        //res.json({msg:'Actualiza estudiante desde clase'});
        const { id } = req.params;
        try {
            const { dni, nombre, apellido, email } = req.body;
            db.query(`UPDATE estudiantes
            SET dni = ?, nombre = ?, apellido = ?, email = ?
            WHERE id = ?;`,
                [dni, nombre, apellido, email, id], (err, rows) => {
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
        //res.json({msg:'Borra estudiantes desde clase'});
        const { id } = req.params;
        try {
            db.query(`DELETE FROM estudiantes WHERE id = ?;`,
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

module.exports = new EstudiantesController();