"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ComposerWikiLibrarian_1 = require("./Librarians/ComposerWikiLibrarian");
let classicalEraUrl = "https://en.wikipedia.org/wiki/List_of_Classical-era_composers";
var lib = new ComposerWikiLibrarian_1.ComposerWikiLibrarian();
//lib.getTwentyFirstCenturyComposersr("https://en.wikipedia.org/wiki/List_of_21st-century_classical_composers");
lib.getClassicalEraComposers(classicalEraUrl);
//# sourceMappingURL=app.js.map