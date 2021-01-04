import ComposerDataModel from "../Models/ComposerDataModel";

const { Builder, By, Key, until, Capabilities } = require('selenium-webdriver');
const { Options } = require('selenium-webdriver/chrome');

const chrome = require('selenium-webdriver/chrome');
let driver = null;
var path = require('chromedriver').path;


export class ComposerWikiLibrarian {

    currentTime: Date;

    async CheckDriver(): Promise<any> {

        if (driver == null) {
            driver = await chrome.Driver.createSession(new Options().addArguments(['--headless', '--no-sandbox']), new
                chrome.ServiceBuilder(path).build());
        }
        return driver;
    }

    async getTwentyFirstCenturyComposersr(wikipediaUrl: string): Promise<Array<ComposerDataModel>> {
        var result = new Array<ComposerDataModel>();

        let chromeCapabilities = Capabilities.chrome();
        chromeCapabilities.setPageLoadStrategy('normal');


        try {

            var driver = await this.CheckDriver();

            await driver.get(wikipediaUrl);
            await driver.wait(until.titleContains('List of'), 10000);
            await driver.manage().setTimeouts({ implicit: 700 });
            var listOfComposersTableElement = await driver.findElement(By.className('wikitable'));
            var rows: any = await listOfComposersTableElement.findElements(By.tagName('TR'));
            for (let row of rows) {
                try {
                    var tds = await row.findElements(By.tagName('TD'));
                    var composerName: string = await tds[0].getText();
                    var yearOfBirth:string = await tds[1].getText();
                    var yearOfDeath :string= await tds[2].getText();
                    result.push(new ComposerDataModel(composerName, yearOfBirth, yearOfDeath));
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
    }


    async getTwentiethCenturyComposers(wikipediaUrl: string): Promise<Array<ComposerDataModel>> {
        var result = new Array<ComposerDataModel>();

        let chromeCapabilities = Capabilities.chrome();
        chromeCapabilities.setPageLoadStrategy('normal');


        try {

            var driver = await this.CheckDriver();

            await driver.get(wikipediaUrl);
            await driver.wait(until.titleContains('List of'), 10000);
            await driver.manage().setTimeouts({ implicit: 700 });
            var listOfComposersTableElement = await driver.findElement(By.className('wikitable'));
            var rows: any = await listOfComposersTableElement.findElements(By.tagName('TR'));
            for (let row of rows) {
                try {
                    var tds = await row.findElements(By.tagName('TD'));
                    var composerName: string = await tds[0].getText();
                    var yearOfBirth: string = await tds[1].getText();
                    var yearOfDeath: string = await tds[2].getText();
                    result.push(new ComposerDataModel(composerName, yearOfBirth, yearOfDeath));
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
    }

    async getRomanticEraComposers(wikipediaUrl: string): Promise<Array<ComposerDataModel>> {
        var result = new Array<ComposerDataModel>();

        let chromeCapabilities = Capabilities.chrome();
        chromeCapabilities.setPageLoadStrategy('normal');


        try {

            var driver = await this.CheckDriver();

            await driver.get(wikipediaUrl);
            await driver.wait(until.titleContains('List of'), 10000);
            await driver.manage().setTimeouts({ implicit: 700 });
            var romanticComposerTables = await driver.findElements(By.className('wikitable'));
            for (let table of romanticComposerTables) {
                try {
                    var rows: any = await table.findElements(By.tagName('TR'));
                    for (let row of rows) {
                        try {
                            var tds = await row.findElements(By.tagName('TD'));
                            var composerName: string = await tds[0].getText();
                            var yearOfBirth: string = await tds[1].getText();
                            var yearOfDeath: string = await tds[2].getText();
                            result.push(new ComposerDataModel(composerName, yearOfBirth, yearOfDeath));
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
    }

    private nameThenDatesParentheticalRegex = new RegExp(/(.*)\((\D+)?(\d{4}).*(\d{4})[\;A-Za-z0-9. ]?\)/);
    async getClassicalEraComposers(wikipediaUrl: string) {


        var result = new Array<ComposerDataModel>();

        let chromeCapabilities = Capabilities.chrome();
        chromeCapabilities.setPageLoadStrategy('normal');


        try {

            var driver = await this.CheckDriver();

            await driver.get(wikipediaUrl);
            await driver.wait(until.titleContains('List of'), 10000);
            await driver.manage().setTimeouts({ implicit: 700 });
            var xPath = "//h2//following::ul";
            var classicalComposerUls = await driver.findElements(By.xpath(xPath));
            var index = 0;                                               
            for (let unorderdList of classicalComposerUls) {
                index++;
                if (index == 1) continue;
                try {
                    var listElements: any = await unorderdList.findElements(By.tagName('li'));
                    for (let listElement of listElements) {
                        try {
                            var listElementStr = await listElement.getText();
                            var regexMatch = this.nameThenDatesParentheticalRegex.exec(listElementStr);
                            if (regexMatch != null) {
                                var composerName = regexMatch[1];
                                var yearOfBirth: string = regexMatch[3];
                                var yearOfDeath: string = regexMatch[4];
                                result.push(new ComposerDataModel(composerName, yearOfBirth, yearOfDeath));
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
    }


}