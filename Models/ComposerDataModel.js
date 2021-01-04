"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ComposerDataModel {
    constructor(composerName, yearOfBirth, yearOfDeath) {
        this.ComposerName = composerName;
        this.YearOfBirth = Number(yearOfBirth);
        this.YearOfDeath = yearOfDeath === "" ? 0 : Number(yearOfDeath);
    }
}
exports.default = ComposerDataModel;
//# sourceMappingURL=ComposerDataModel.js.map