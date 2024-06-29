const express = require('express');
const cors = require('cors');
const app = express();
const estudiantesRoutes = require('./routes/estudiantesRoutes.js');
const profesoresRoutes = require('./routes/profesoresRoutes.js');
const cursosRoutes = require('./routes/cursosRoutes.js');
require('dotenv').config({path:'./.env'})

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hola mundo, servidor node.js/express');
});

app.use("/estudiantes", estudiantesRoutes);
app.use("/profesores", profesoresRoutes);
app.use("/cursos", cursosRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Servidor activo en localhost:${process.env.PORT}`);
});