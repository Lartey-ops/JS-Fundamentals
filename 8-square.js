let args = process.argv.slice(2);
let input = args[0]
let number = parseInt(input, 10)


if (isNaN(number)) {
  console.log("Missing size");
} else {
  for (let i = 0; i < number; i++) {
    console.log("X".repeat(number));
  }
}