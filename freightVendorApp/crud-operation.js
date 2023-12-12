const { conn } = require('./db-connection');

const getVendorDetails = (req, res) => {
  const getData = 'SELECT * FROM FREIGHTVENDORDETAILS';
  conn.exec(getData, async (err, result) => {
    if(err) console.log(err);
    if (result) await res.json(result);
  });
};

const addVendor = (req, res) => {
  const {pickUpLocation,destinationLocation,price,deliveryInDays,freightVendorName,contact} = req.body;
  conn.exec('INSERT INTO FREIGHTVENDORDETAILS (pickUpLocation,destinationLocation,price,deliveryInDays,freightVendorName,contact) VALUES (?, ?, ?, ?,?,?)',
    [pickUpLocation,destinationLocation,price,deliveryInDays,freightVendorName,contact], async (err, result) => {
    if (err) console.log('Error Occurred', err);
    if (result) res.json({'message':'Freight vendor added successfully'});
  });
};

const deleteVendor = (req, res) => {
  const freightVendorId = req.params.freightvendorid;
  conn.exec(`DELETE FROM FREIGHTVENDORDETAILS WHERE freightVendorId = ${freightVendorId}`, async (err, result) => {
    if(err) console.log(err);
    if (result) res.json({'message':'Freight Vendor Details deleted successfully'});
  });
};

const updateVendor = (req, res) => {
  const {freightVendorId , pickUpLocation,destinationLocation,price,deliveryInDays,freightVendorName,contact} = req.body;
  conn.exec('UPDATE FREIGHTVENDORDETAILS SET pickUpLocation = ?, destinationLocation = ?, price = ?, deliveryInDays = ? , freightVendorName = ?, contact=? WHERE freightVendorId = ?',
    [pickUpLocation,destinationLocation,price,deliveryInDays,freightVendorName,contact, freightVendorId], async (err, result) => {
      if(err) console.log(err);
    if (result) res.json({'message':'Freight Vendor details Updated successfully'});
    });

};

module.exports = {getVendorDetails,addVendor,deleteVendor,updateVendor};