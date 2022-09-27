let sum = "";
// Square and Rectangle;

// for (let i = 1; i <= 5; i++) {
//   for (let j = i; j <= 5; j++) {
//     sum += "* ";
//   }
//   for (let j = 1; j <= i; j++) {
//     sum += "* ";
//   }
//   for (let j = 1; j <= 5; j++) {
//     sum += "* ";
//   }
//   sum += "\n";
// }

// At right side: right angle triangle;

// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= i; j++) {
//     sum += "* ";
//   }
//   sum += "\n";
// }

// At left side: Right angle triangle;

// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <=5; j++){
//         sum += '  '
//     }
//     for (let j = 1; j <= i ; j++){
//         sum += '* '
//     }
//     sum += '\n'
// }

// Diamond;

for (let i = 1; i <= 5; i++) {
  for (let j = i; j < 5; j++) {
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

for (let i = 5 - 1; i >= 1; i--) {
  for (let j = 5 - 1; j >= i; j--) {
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
console.log(sum);
