// {} => Named Exports.
import { bestClub } from "./module1.js";

/**
 * Can do the same with multiple imports and exports.
 * OR
 * import { bestClub as FavouriteTeam } from './module1.js
 */

const myBestClub = bestClub + " " + "is my best club.";

console.log(myBestClub);

/**
 *
 * The import keyword works only inside modules—not
 * inside regular JavaScript programs.
 *
 * An imported module's features are not available
 * in the global scope. Therefore, you can access imported items only
 * in the script you have imported them into—not in other places like the JavaScript console.
 *
 * JavaScript hoists import statements. So, you can define them anywhere in your module.
 *
 */

// We can export default module and give it any name we want in the module where it is imported.
