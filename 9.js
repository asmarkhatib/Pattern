// X pattern

let sum = "";
// X Pattern;
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5; j++) {
    if (j === i || j + i === 6) {
      sum += "* ";
    } else {
      sum += "  ";
    }
  }

  sum += "\n";
}
console.log(sum);
