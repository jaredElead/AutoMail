
module.exports = function(a, b, options) {
  if (a == b) return options.fn(this);
  if(a==null || b==null) return options.fn(this);
  else return options.inverse(this);
}