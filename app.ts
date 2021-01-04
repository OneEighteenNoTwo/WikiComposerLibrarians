import { ComposerWikiLibrarian } from "./Librarians/ComposerWikiLibrarian";
let classicalEraUrl: string = "https://en.wikipedia.org/wiki/List_of_Classical-era_composers";
var lib = new ComposerWikiLibrarian();

lib.getClassicalEraComposers(classicalEraUrl);