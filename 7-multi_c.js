let args = process.argv.slice(2);
let input = args[0]
let number = parseInt(input, 10)
let word = "C is fun"

if (isNaN(number)) {
  console.log("Missing number of occurrences");
} else {
  for (let i = 0; i < number; i++) {
    console.log(word);
  }
}