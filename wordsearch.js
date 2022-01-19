// Pair programmed by Jordan Benson and Lee Pavelich

const wordSearch = (letters, word) => {
  if (letters.length === 0) return false;
  const transposedLetters = transpose(letters);

  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  const verticalJoin = transposedLetters.map(ls => ls.join(''));
  for (let l of verticalJoin) {
    if (l.includes(word)) return true;
  }
  return false;
};

const transpose = function(matrix) {
  let transposed = [];
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (!transposed[col]) transposed[col] = [];
      transposed[col][row] = matrix[row][col];
    }
  }
  return transposed;
};

module.exports = wordSearch;