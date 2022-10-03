let sum = "";
let n = 5;
let px = n;
let py = n;

for (let i = 1; i <= n; i++) {
  for (let j = 1; j < n * 2; j++) {
    if (j <= px || j >= py) {
      sum += "* ";
    } else {
      sum += "  ";
    }
  }
  px--;
  py++;
  sum += "\n";
}
// for (let i = 1; i < n; i++) {
//   for (let j = 1; j > n * 2 - 1; j++) {
//     if (j >= px || )
//   }
//   sum += "\n";
// }

console.log(sum);
