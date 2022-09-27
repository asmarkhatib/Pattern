let sum = "";
for (let i = 5 ; i >= 1; i--) {
  for (let j = 5 ; j >= i; j--) {
    sum += "  ";
  }
  for (let j = i; j >= 1; j--) {
    sum += "* ";
  }
  for (let j = i; j > 1; j--) {
    sum += "* ";
  }
  sum += "\n";
}
for (let i = 2; i <= 5; i++) {
  for (let j = i; j <= 5; j++) {
    sum += "  ";
  }
  for (let j = 1; j <= i; j++) {
    sum += "* ";
  }
  for (let j = 1; j < i; j++) {
    sum += "* ";
  }
  sum += "\n";
}
console.log(sum);
