const express = require('express');
const usuarioRoutes = require('./src/usuario/routes');
const clienteRoutes = require('./src/cliente/routes');
const trabajadorRoutes = require('./src/trabajador/routes');

const app = express();
const port = 3001;


app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use('/api/v1/usuarios', usuarioRoutes);
app.use('/api/v1/clientes', clienteRoutes);
app.use('/api/v1/trabajadores', trabajadorRoutes);

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});