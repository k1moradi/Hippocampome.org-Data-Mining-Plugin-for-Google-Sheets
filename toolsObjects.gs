/**
 * Gets a set of objets and merge them all
 * @param objects
 * @returns one object
 */
function mergeObjs(){
  all = {};
  for (var i=0; i<arguments.length; i++) {
    for (var attrname in arguments[i]) { all[attrname] = arguments[i][attrname]; }
  };
  return all;
}