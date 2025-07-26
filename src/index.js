module.exports = function reverse(n) {
  let m = String(Math.abs(n));
  m = m.split('');
  m = m.reverse();
  m = m.join('');
  return m;
};
