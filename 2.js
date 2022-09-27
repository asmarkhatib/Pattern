let result = "";
for (let i = 1; i <= 5; i++) {
  for (let j = i; j <= 5; j++) {
    result += "  ";
  }
  for (let j = 1; j <= i; j++) {
    result += "* ";
  }
  for (let j = 1; j < i; j++ ){
    result += "* "
  }
  result += "\n"
}
console.log(result)
