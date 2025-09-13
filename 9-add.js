let args = process.argv.slice(2);
let a = parseInt(args[0], 10);
let b = parseInt(args[1], 10);

function add(a, b) {
  return x + y;
}

if (isNaN(a) || isNaN(b)) {
  console.log("NaN");
} else {
  console.log(add(a, b));
}