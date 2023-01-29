const express = require('express');
const usuarioRoutes = require('./src/usuario/routes');

const app = express();
const port = 3001;


app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use('/api/v1/usuarios', usuarioRoutes);

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});