"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRepository = void 0;
const DbConfig_1 = require("./DbConfig");
class BaseRepository {
    constructor() {
        this.ourDb = new DbConfig_1.DbConfig();
        this.mysql = require('mysql');
        this.util = require('util');
    }
}
exports.BaseRepository = BaseRepository;
//# sourceMappingURL=BaseRepository.js.map