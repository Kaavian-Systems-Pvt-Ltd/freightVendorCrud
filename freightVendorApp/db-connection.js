const hann = require('@sap/hana-client');

const conn = hann.createConnection();

const hanaConnection = {
  serverNode: '9602d12f-1047-4bc4-97eb-7e484879d1b8.hana.trial-us10.hanacloud.ondemand.com:443',
  uid: 'DBADMIN',
  pwd: 'Gold1234$'
};

module.exports = {conn, hanaConnection};