const sql= require('mssql');
const config= require('../config.json');
const WHconfig= config['WHDB'];

async function executeQuery(query) {
    try{
        let pool= await sql.connect(WHconfig);
        let result= await pool.request().query(query);
        await pool.close();
        return result.recordset;

    }
    catch(error)
    {
        console.log(`SQL error: ${error}`)

    }
    
}
module.exports = { executeQuery };