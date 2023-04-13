//In Node JS every file is it's own module.
/*
export a module using module.exports
 */
let count = 0;
const inc = () => ++count;
const dec = () => --count;

const getCount = () => count;
// module.exports = "Kritika";
module.exports = {
  inc,
  dec,
  getCount,
};
