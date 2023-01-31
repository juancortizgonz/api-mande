const express = require('express');
const usuarioRoutes = require('./src/usuario/routes');
const laborRoutes = require('./src/labor/routes');
const tarifaRoutes = require('./src/tarifa/routes');
const servicioRoutes = require('./src/servicio/routes');
const trabajadorRoutes = require('./src/trabajador/routes');
const clienteRoutes = require('./src/cliente/routes');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use('/api/v1/usuarios', usuarioRoutes);
app.use('/api/v1/trabajadores', trabajadorRoutes);
app.use('/api/v1/clientes', clienteRoutes);
app.use('/api/v1/labores', laborRoutes);
app.use('/api/v1/tarifas', tarifaRoutes);
app.use('/api/v1/servicios', servicioRoutes);

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});