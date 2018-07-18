/**
 * Handlebars block helper to filter results by column assignment
 * @param {mixed} a - First value to compare.
 * @param {mixed} b - Second value to compare.
 * @param {object} options - Handlebars object.
 * @returns If the values are equal, content inside of the helper. If not, the content inside the `{{else}}` block.
 */
module.exports = function(a, b, options) {
  if (a == b) return options.fn(this);
  if(a==null || b==null) return options.fn(this);
  else return options.inverse(this);
}