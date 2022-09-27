let n = 5;
let sum = "";

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i; j++) {
    sum += "  ";
  }
  for (let j = 0; j < 2 * i - 1; j++) {
    sum += "* ";
  }
  sum += "\n";
}
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i; j++) {
    sum += "  ";
  }
  for (let j = 0; j < 2 * (i - 1) - 1; j++) {
    sum += "* ";
  }
  sum += "\n";
}
console.log(sum);
