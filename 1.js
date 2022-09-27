let result = "";
for (let i = 1; i <= 5; i++) {
  for (let j = i; j < 5; j++) {
    result += "  ";
  }
  for (let j = 1; j <= i; j++) {
    result += "* ";
  }
  for (let j = 1; j < i; j++) {
    result += "* ";
  }
  result += "\n";
}
for (let i = 5 - 1; i >= 1; i--) {
  for (let j = 5 - 1; j >= i; j--) {
    result += "  ";
  }
  for (let j = i; j >= 1; j--) {
    result += "* ";
  }
  for (let j = i; j > 1; j--) {
    result += "* ";
  }
  result += "\n";
}

console.log(result);
