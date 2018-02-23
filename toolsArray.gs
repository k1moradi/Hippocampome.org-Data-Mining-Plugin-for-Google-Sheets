function Null(e){return e};                                                 //use with filter iterator
function dash2null(value){return (/^\s*-+\s*$/g.test(value))?'':value}
function onlyUnique(value, index, self){return self.indexOf(value)===index} //use with filter iterator
function to1D(previous, value){return previous.concat(value)}               //use with reduce iterator
function to1DFast(v){return v[0]}                                           //use with map    iterator
function isNumeric(n){return !isNaN(parseFloat(n)) && isFinite(n)}
function round(value, decimals){return Number(Math.round(value+'e'+decimals)+'e-'+decimals)}

/**
 * Gets a set of arrays and merge them all
 * @param arrays
 * @returns one array
 */
function mergeArrays()
{
  return Array.prototype.slice.call(arguments).reduce(function(p,arg){return p.concat(arg)},[]);
};
/**
* checkes if the members of a one dimentional array are unique
*
* @param {array} any array
* @return {boolian}
* @customfunction
*/
function isUnique(array)
{
  return array.length === array.filter(function(value, index, self){return self.indexOf(value) === index}).length;
};
/**
* removes the duplicate items
*
* @param {array} any array
* @return {boolian}
* @customfunction
*/
function unique(array)
{
  return array.filter(function(value, index, self){return self.indexOf(value) === index});
};
/**
* array-of-array to array converter
*
* @param {array}
* @return {array} a one dimentional array
* @customfunction
*/
function asArray(array) {
  return array.reduce(function(previous, value){return previous.concat(value)});
}
/**
* fill the array with a value
*
* @param {array}
* @return {array} a one dimentional array
* @customfunction
*/
function fill(length,value)
{
  return Array.apply(null, Array(length)).map(String.prototype.valueOf,value);
};
/**
* fill the array with a range
*
* @param {array}
* @return {array} a one dimentional array
* @customfunction
*/
function range(start, end) {
    var foo = [];
    for (var i = start; i <= end; i++) {
        foo.push(i);
    }
    return foo;
}