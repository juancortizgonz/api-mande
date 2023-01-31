const getPaymentById = 'SELECT * FROM "Metodo_Pago" WHERE id_metodo_pago = $1';
const addPayment = 'INSERT INTO "Metodo_Pago" (tipo_tarjeta, numero_tarjeta, id_cliente) VALUES ($1, $2, $3)';

module.exports = {
    getPaymentById,
    addPayment,
};