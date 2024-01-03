const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT ||  3000; 

const gameRoutes = require('./routes'); 

app.use(bodyParser.json());

// Configurar encabezados en Node.js/Express
app.use(cors({ origin: 'https://psmlws4w-4200.uks1.devtunnels.ms' }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use('/api', gameRoutes); 


app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});