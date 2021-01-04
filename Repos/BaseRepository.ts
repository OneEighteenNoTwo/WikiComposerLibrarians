import { DbConfig } from "./DbConfig";


export class BaseRepository {
    ourDb: DbConfig = new DbConfig()
    mysql = require('mysql');
    util = require('util');
    constructor() { }

}