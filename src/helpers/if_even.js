// Example file src/helpers/bold.js
module.exports = function(conditional, options) {
	var index = Number(conditional) + 1;
  if((index % 2) == 0) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }

  
}