"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComposerWikiLibrarian = void 0;
const ComposerDataModel_1 = require("../Models/ComposerDataModel");
const { Builder, By, Key, until, Capabilities } = require('selenium-webdriver');
const { Options } = require('selenium-webdriver/chrome');
const chrome = require('selenium-webdriver/chrome');
let driver = null;
var path = require('chromedriver').path;
class ComposerWikiLibrarian {
    constructor() {
        this.nameThenDatesParentheticalRegex = new RegExp(/(.*)\((\D+)?(\d{4}).*(\d{4})[\;A-Za-z0-9. ]?\)/);
    }
    CheckDriver() {
        return __awaiter(this, void 0, void 0, function* () {
            if (driver == null) {
                driver = yield chrome.Driver.createSession(new Options().addArguments(['--headless', '--no-sandbox']), new chrome.ServiceBuilder(path).build());
            }
            return driver;
        });
    }
    getTwentyFirstCenturyComposersr(wikipediaUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            var result = new Array();
            let chromeCapabilities = Capabilities.chrome();
            chromeCapabilities.setPageLoadStrategy('normal');
            try {
                var driver = yield this.CheckDriver();
                yield driver.get(wikipediaUrl);
                yield driver.wait(until.titleContains('List of'), 10000);
                yield driver.manage().setTimeouts({ implicit: 700 });
                var listOfComposersTableElement = yield driver.findElement(By.className('wikitable'));
                var rows = yield listOfComposersTableElement.findElements(By.tagName('TR'));
                for (let row of rows) {
                    try {
                        var tds = yield row.findElements(By.tagName('TD'));
                        var composerName = yield tds[0].getText();
                        var yearOfBirth = yield tds[1].getText();
                        var yearOfDeath = yield tds[2].getText();
                        result.push(new ComposerDataModel_1.default(composerName, yearOfBirth, yearOfDeath));
                    }
                    catch (exception) {
                        console.log(exception);
                    }
                }
                return result;
            }
            catch (exception) {
                console.log(exception);
                return result;
            }
            finally {
            }
        });
    }
    getTwentiethCenturyComposers(wikipediaUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            var result = new Array();
            let chromeCapabilities = Capabilities.chrome();
            chromeCapabilities.setPageLoadStrategy('normal');
            try {
                var driver = yield this.CheckDriver();
                yield driver.get(wikipediaUrl);
                yield driver.wait(until.titleContains('List of'), 10000);
                yield driver.manage().setTimeouts({ implicit: 700 });
                var listOfComposersTableElement = yield driver.findElement(By.className('wikitable'));
                var rows = yield listOfComposersTableElement.findElements(By.tagName('TR'));
                for (let row of rows) {
                    try {
                        var tds = yield row.findElements(By.tagName('TD'));
                        var composerName = yield tds[0].getText();
                        var yearOfBirth = yield tds[1].getText();
                        var yearOfDeath = yield tds[2].getText();
                        result.push(new ComposerDataModel_1.default(composerName, yearOfBirth, yearOfDeath));
                    }
                    catch (exception) {
                        console.log(exception);
                    }
                }
                return result;
            }
            catch (exception) {
                console.log(exception);
                return result;
            }
            finally {
            }
        });
    }
    getRomanticEraComposers(wikipediaUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            var result = new Array();
            let chromeCapabilities = Capabilities.chrome();
            chromeCapabilities.setPageLoadStrategy('normal');
            try {
                var driver = yield this.CheckDriver();
                yield driver.get(wikipediaUrl);
                yield driver.wait(until.titleContains('List of'), 10000);
                yield driver.manage().setTimeouts({ implicit: 700 });
                var romanticComposerTables = yield driver.findElements(By.className('wikitable'));
                for (let table of romanticComposerTables) {
                    try {
                        var rows = yield table.findElements(By.tagName('TR'));
                        for (let row of rows) {
                            try {
                                var tds = yield row.findElements(By.tagName('TD'));
                                var composerName = yield tds[0].getText();
                                var yearOfBirth = yield tds[1].getText();
                                var yearOfDeath = yield tds[2].getText();
                                result.push(new ComposerDataModel_1.default(composerName, yearOfBirth, yearOfDeath));
                            }
                            catch (exception) {
                                console.log(exception);
                            }
                        }
                    }
                    catch (exception) {
                        console.log(exception);
                    }
                }
                return result;
            }
            catch (exception) {
                console.log(exception);
                return result;
            }
            finally {
            }
        });
    }
    getClassicalEraComposers(wikipediaUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            var result = new Array();
            let chromeCapabilities = Capabilities.chrome();
            chromeCapabilities.setPageLoadStrategy('normal');
            try {
                var driver = yield this.CheckDriver();
                yield driver.get(wikipediaUrl);
                yield driver.wait(until.titleContains('List of'), 10000);
                yield driver.manage().setTimeouts({ implicit: 700 });
                var xPath = "//h2//following::ul";
                var classicalComposerUls = yield driver.findElements(By.xpath(xPath));
                var index = 0;
                for (let unorderdList of classicalComposerUls) {
                    index++;
                    if (index == 1)
                        continue;
                    try {
                        var listElements = yield unorderdList.findElements(By.tagName('li'));
                        for (let listElement of listElements) {
                            try {
                                var listElementStr = yield listElement.getText();
                                var regexMatch = this.nameThenDatesParentheticalRegex.exec(listElementStr);
                                if (regexMatch != null) {
                                    var composerName = regexMatch[1];
                                    var yearOfBirth = regexMatch[3];
                                    var yearOfDeath = regexMatch[4];
                                    result.push(new ComposerDataModel_1.default(composerName, yearOfBirth, yearOfDeath));
                                }
                            }
                            catch (exception) {
                                console.log(exception);
                            }
                        }
                    }
                    catch (exception) {
                        console.log(exception);
                    }
                }
                return result;
            }
            catch (exception) {
                console.log(exception);
                return result;
            }
            finally {
            }
        });
    }
}
exports.ComposerWikiLibrarian = ComposerWikiLibrarian;
//# sourceMappingURL=ComposerWikiLibrarian.js.map