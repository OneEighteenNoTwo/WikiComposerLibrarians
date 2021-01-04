"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbConfig = void 0;
const mysql = require("mysql");
require("dotenv").config();
let dbConfig = {
    connectionLimit: 20,
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
};
class DbConfig {
    constructor() {
        this.pool = mysql.createPool(dbConfig);
        this.connection = () => {
            return new Promise((resolve, reject) => {
                this.pool.getConnection((err, connection) => {
                    if (err)
                        reject(err);
                    console.log("MySQL pool connected: threadId " + connection.threadId);
                    const query = (sql, binding) => {
                        return new Promise((resolve, reject) => {
                            connection.query(sql, binding, (err, result) => {
                                if (err)
                                    reject(err);
                                resolve(result);
                            });
                        });
                    };
                    const release = () => {
                        return new Promise((resolve, reject) => {
                            if (err)
                                reject(err);
                            console.log("MySQL pool released: threadId " + connection.threadId);
                            resolve(connection.release());
                        });
                    };
                    resolve({ query, release });
                });
            });
        };
        this.query = (sql, binding) => {
            return new Promise((resolve, reject) => {
                this.pool.query(sql, binding, (err, result, fields) => {
                    if (err)
                        reject(err);
                    resolve(result);
                });
            });
        };
    }
}
exports.DbConfig = DbConfig;
module.exports = {
    DbConfig: DbConfig
};
//# sourceMappingURL=DbConfig.js.map