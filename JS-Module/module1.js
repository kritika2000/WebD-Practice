/**
 * There are two equivalent ways to export a module's item.

1. Place an export keyword before your code
2. Create an export statement

We can export multiple functions and variables.
*/

/**
 *
 * The export keyword works only inside modules—not inside regular
 * JavaScript programs.
 *
 * JavaScript hoists export statements. So, you can define
 *  them anywhere in your module.
 *
 * Exported modules operate in strict mode by default—regardless of whether
 * you specified the strict statement
 *
 */

// Create a variable named "bestClub":
const bestClub = "Your Club";

// Create a function named "multiply":
function multiply(x, y) {
  return x * y;
}

// Create an array named "fruits":
const fruits = ["Mango", "Apple", "Orange", "Lemon"];

// Export the three statements above:
export { bestClub, multiply, fruits };

// Export the bestClub variable as "favoriteTeam" and will be imported as "favouriteTeam":
// export { bestClub as favoriteTeam };

/**
 * '*' for importing multiple items in a module.
 * import * as firstModule from "./module-1.js";

const bestClub = `I bought ${firstModule.multiply(2, 11)} ${firstModule.fruits[2]}s at ${firstModule.bestClub}.`;

console.log(bestClub);
 */
