sum = "";
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j < i; j++) {
    sum += "  ";
  }
  for (let j = i; j <= 5; j++) {
    sum += "* ";
  }
  for (let j = i; j < 5; j++) {
    sum += "* ";
  }
  sum += "\n";
}
console.log(sum);
