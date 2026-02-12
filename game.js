// Generate random number from 0 to infinity
function rand(max = Infinity) {
  return Math.floor(Math.random() * (max + 1));
}

// Usage examples
const num = rand();
console.log("Random 0-Infinity: " + num);

const num2 = rand(50);
console.log("Random 0-50: " + num2);
