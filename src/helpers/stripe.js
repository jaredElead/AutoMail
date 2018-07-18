// Example file src/helpers/bold.js
module.exports = function(conditional, count, options) {
	var index = Number(conditional) + 1;
  if((index % count) == 0) {
    return '</row><row>';
  } 
}