const knex = require('knex')({
    client:'pg',
    connection:'postgres://postgres:rishavpgsql@localhost:5432/nodejs-endpoints-db'
});

module.exports = {knex};