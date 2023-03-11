function getRandom(a, b) {
  if (a >= 0 && b >= 0) {
    if (a > b) {
      const c = a;
      a = b;
      b = c;
    }
    return Math.round(Math.random() * (b - a + 1) + a);
  }
}

function isMaxLength(string, maxLength) {
  return string.length <= maxLength;
}
