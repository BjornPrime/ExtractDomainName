/*
In mathematics, a Diophantine equation is a polynomial equation, usually with two or more unknowns, such that only the integer solutions are sought or studied.

In this kata we want to find all integers x, y (x >= 0, y >= 0) solutions of a diophantine equation of the form:

x2 - 4 * y2 = n
(where the unknowns are x and y, and n is a given positive number) in decreasing order of the positive xi.

If there is no solution return [] or "[]" or "". (See "RUN SAMPLE TESTS" for examples of returns).

Examples:
solEquaStr(90005) --> "[[45003, 22501], [9003, 4499], [981, 467], [309, 37]]"
solEquaStr(90002) --> "[]"
*/

function solequa(n) {
  var x = Math.ceil(Math.sqrt(n));
	var output = [];
  while (n >= (2*(x-1)+1)/4) {
    var y = Math.sqrt(Math.pow(x, 2) - n);
    if (y % 2 == 0) {
      output.unshift([x, y/2]);
    }
    x++;
  }
  return output;
}
