export default class ComposerDataModel {
    constructor(composerName: string, yearOfBirth: string, yearOfDeath: string) {
        this.ComposerName = composerName;
        this.YearOfBirth = Number(yearOfBirth);
        this.YearOfDeath = yearOfDeath === "" ? 0 : Number(yearOfDeath);
    }
    public ComposerName: string;
    public YearOfBirth: number;
    public YearOfDeath: number;
}