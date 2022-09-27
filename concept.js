let sum = "";

// right angle triangle at left;
// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= i; j++) {
//     sum += "* ";
//   }
//   sum += "\n";
// }

//right angle trianle at right;
// for (let i = 1; i <= 5; i++) {
//   for (let j = 5 - 1; j >= i; j--) {
//     sum += "  ";
//   }
//   for (let j = 1; j <= i; j++) {
//     sum += "* ";    // for making priymid just add 2 space in this;
//   }
//   sum += "\n";
// }

// X pattern;
// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 5; j++) {
//     if (j === i || j + i === 6) {  // if you write a function then you need only is that j + i === n + 1; thats it..
//       sum += "* ";
//     } else {
//       sum += "  ";  // for add another symbole just add here you get result;
//     }
//   }
//   sum += "\n";
// }

// hallow square;
// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 5; j++) {
//     if (i === 1 || i === 5 || j === 1 || j === 5) {
//       sum += "* ";
//     } else {
//       sum += "  "; // if you want to add some other symbols then you can add here;
//     }
//   }
//   sum += "\n";
// }

// for making hallow triangle
// for (let i = 1; i <= 5; i++) {
  
//   for (let j = 1; j <= 5; j++) {
//     if (i + j === 6 || i === 5 || j === 5) {
//       sum += "* ";
//      } else {
//        sum += "  ";
//     }
//    }
//   sum += "\n";
// }

// 
console.log(sum);
