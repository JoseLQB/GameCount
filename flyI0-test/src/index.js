const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT ||  3000; 

const gameRoutes = require('./routes'); 

app.use(bodyParser.json());

app.use(cors({ origin: 'https://psmlws4w-4200.uks1.devtunnels.ms' }));

app.use('/api', gameRoutes); 

// Definir rutas y lógica aquí

app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});