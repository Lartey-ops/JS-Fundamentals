let args = process.argv.slice(2);
let input = args[0];
let number = parseInt(input, 10);

if (isNaN(number)) {
  console.log("Not a number");
} else {
  console.log(`My number: ${number}`);
}