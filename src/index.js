
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix == null || !matrix.length) {
    return [];
  }
  return matrix.reduce((acc, curr, idx) => {
    return idx % 2 === 0
      ? [...acc, ...curr]
      : [...acc, ...curr.reverse()];
  }, []);
}
