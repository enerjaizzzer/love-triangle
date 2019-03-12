/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var x = 0
  for(var i = 0; i < preferences.length; i++) {
    var
      a = preferences[i];
      b = preferences[a - 1];
      c = preferences[b - 1]
      if(c == i + 1) {
        x++;
      }
  }
  return (x / 3)^0;
};
