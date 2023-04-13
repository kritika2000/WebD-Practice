// src folder is for all the source files.
// dist is that is intended for distribution for production.
// main.js file(a bundle) in dist folder is created by webpack
// after building the dependedncy graph.
/**
 * Webpack starts from a single module and processes all
 * its direct and indirect dependencies to form the entire
 * dependency graph and then bundle all the necessary
 * modules.
 */

// https://medium.com/swlh/understand-basic-webpack-from-scratch-6a1976565ae0

/**
 * Install webpack and webpack-cli
 *
 * Create config file for entry point and
 * name of bundle file -> Out of the box, webpack won’t
 * require you to use a configuration file.
 * However, it will assume the entry point
 * of your project is src/index.js and will output
 * the result in dist/main.js minified and optimized
 * for production.
 *
 * Create index.js file.
 *
 * Create and launch the bundle using "npx webpack --config ./webpack.config.js"
 * This will create a new /dist folder with main.js bundle file.
 *
 * add 'build' as webpack to scripts in pckg.json to use npm run build
 * cmd to run webpack command.
 */
import React from "react";
import { render } from "react-dom";
import "./style.css";

const Greeting = () => {
  return (
    <>
      <h1>Hello World!</h1>
      <div id="image"></div>
    </>
  );
};

render(<Greeting />, document.getElementById("root"));
