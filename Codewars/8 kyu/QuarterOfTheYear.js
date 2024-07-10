/**
 * Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

Constraint:

1 <= month <= 12
 */

const quarterOf = (month) => {
  let first = [1, 2, 3];
  let second = [4, 5, 6];
  let three = [7, 8, 9];
  let four = [10, 11, 12];

  if (first.includes(month)) return 1;
  if (second.includes(month)) return 2;
  if (three.includes(month)) return 3;
  if (four.includes(month)) return 4;
};
