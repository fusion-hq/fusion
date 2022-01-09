const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  user: process.env.DB_USER || 'nudfobnsoevesz',
  host: process.env.DB_HOST || 'ec2-18-211-236-255.compute-1.amazonaws.com',
  database: process.env.DB || 'dfnilk2mj9v6bs',
  password: process.env.DB_PASSWORD || '7e2fae0ea6e18c16203bd75cd07d9f13a1d9eff9f5e3f34cf33cadea2ad4e434',
  port: process.env.DB_PORT || 5432,
  ssl: { rejectUnauthorized: false }
});

const savePlugin = async(req, res) => {
    const { writeKey, plugin_name, is_active} = await req.query;

    const isAvailable = await pool.query(
        `SELECT * FROM FUSION_PLUGINS_${writeKey} where plugin_name = $1`,
        [plugin_name]
    )

    if(isAvailable.rows.length > 0){
        let response = await pool.query(
            `UPDATE FUSION_PLUGINS_${writeKey} SET is_active = $1 where plugin_name = $2`,
            [is_active, plugin_name]
        )

        return res.status(200).json(response.rows);
    } else {
        let response  = await pool.query(
            `INSERT INTO FUSION_PLUGINS_${writeKey} (plugin_name, is_active, write_key) VALUES ($1, $2, $3)`,
            [plugin_name, is_active, writeKey]
        );

        return res.status(200).json(response.rows);
    }

}

const getPluginStatus = async(req, res) => {
    const {plugin_name, writeKey} = await req.query;

    if(writeKey !== undefined && writeKey !== null) {
        const response = await pool.query(
            `SELECT * FROM FUSION_PLUGINS_${writeKey} where plugin_name = $1`,
            [plugin_name]
        )
    
        return res.status(200).json(response.rows[0]);
    } else {
        return res.status(400).json({"message": "Something went wrong"});
    }
}

module.exports = {
    savePlugin,
    getPluginStatus
};