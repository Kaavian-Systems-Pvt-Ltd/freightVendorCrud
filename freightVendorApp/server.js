const express = require('express');
const xsenv = require('@sap/xsenv');
const bodyParser = require('body-parser');

const {conn, hanaConnection} = require('./db-connection');
const {getVendorDetails,addVendor,deleteVendor,updateVendor} = require('./crud-operation');

const PORT= process.env.PORT || 3003

const app = express();
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

app.get('/getData', getVendorDetails);

app.post('/addData', addVendor);

app.delete('/deleteData/:freightvendorid', deleteVendor);

app.put('/updateData', updateVendor);

app.listen(PORT, () => {
  console.log('Server Running...')
});

conn.connect(hanaConnection, async (err) => {
  xsenv.loadEnv();
  if(err) console.log('Error Occurred', err);
  else console.log('DB connected Successfully');
});