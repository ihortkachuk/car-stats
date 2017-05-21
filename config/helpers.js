var path = require('path');

var _root = path.resolve(__dirname, '..');

function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [_root].concat(args));
}

function packageSort(packages) {
  var len = packages.length - 1;
  var first = packages[0];
  var last = packages[len];
  return function sort(a, b) {
    if (a.names[0] === first) {
      return -1;
    }
    if (a.names[0] === last) {
      return 1;
    }
    if (a.names[0] !== first && b.names[0] === last) {
      return -1;
    } else {
      return 1;
    }
    return 0;
  }
}


exports.root = root;
exports.packageSort = packageSort;
