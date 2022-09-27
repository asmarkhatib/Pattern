sum = "";
for (let i = 1; i <= 5; i++) {
  for (let j = i; j < 5; j++) {
    sum += "  ";
  }
  for (let j = 1; j <=i; j++) {
    sum += "* ";
  }
  for (let j = 1; j < i; j++) {
    sum += "* ";
  }
  sum += "\n";
}
for (let i = 1; i <= 4; i++) {
  for (let j = 1; j <= i; j++) {
    sum += "  ";
  }
  for (let j = i; j <= 4; j++) {
    sum += "* ";
  }
  for (let j = i; j < 4; j++) {
    sum += "* ";
  }
  sum += "\n";
}
console.log(sum);
