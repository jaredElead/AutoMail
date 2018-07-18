// Example file src/helpers/bold.js
module.exports = function(conditional, options) {
var index2 = Number(conditional) + 1;
  if((index2 % 2) != 0) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }

  
}