// Example file src/helpers/bold.js
module.exports = function(conditional, count, options) {
  if(conditional == 0){
  		return '<row>';
  	} 
  if((conditional % count) == 0) {
    return '</row><row>';
  }
}