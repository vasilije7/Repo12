// Only change code below this line
function sumFibonacci(num) {
  var n1 = 0;
  var n2 = 1;
  var next = 0;
  var sum = 0;
  for (var i = 1; n1 <= num; i++) {
    n1 % 2 == 1 ? (sum += n1) : {};
    next = n1 + n2;
    n1 = n2;
    n2 = next;
  }
  return sum;
}

console.log(sumFibonacci(1));
console.log(sumFibonacci(10));
console.log(sumFibonacci(20));
console.log(sumFibonacci(4));
console.log(sumFibonacci(-5));
// Only change code above this line
module.exports = sumFibonacci;
