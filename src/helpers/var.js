module.exports = function(myvar, newvalue, options) {
 this[myvar] = newvalue;
  return this[myvar];
}