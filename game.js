

const readline = require('readline');
// Generator
function getRandomNumber(min = 1, max = 100) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// Range
rl.question('Minimo: ', (minInput) => {
  const min = parseInt(minInput, 10);
  rl.question('Maximo: ', (maxInput) => {
    const max = parseInt(maxInput, 10);
    if (isNaN(min) || isNaN(max) || min > max) {
      console.log('Rango invalido');
      rl.close();
      return;
    }
    const secretNumber = getRandomNumber(min, max);
    function askGuess() {
      rl.question('Ingrese numero: ', (guessInput) => {
        const guess = parseInt(guessInput, 10);
        if (isNaN(guess)) {
          console.log('Ingrese un NUMERO');
          askGuess();
          return;
        }
        const diff = Math.abs(secretNumber - guess);
        if (guess === secretNumber) {
          console.log(`PERFECT! El numero era: ${secretNumber}`);
          rl.close();
        } else if (diff > 1000) {
          console.log('ANTARTICA');
          askGuess();
        } else if (diff >= 100) {
          console.log('FRIO');
          askGuess();
        } else if (diff >= 50) {
          compladonsole.log('TEMPLADO');
          askGuess();
        } else if (diff >= 10) {
          console.log('CALIENTE');
          askGuess();
        } else if (diff < 10) {
          console.log('ARDIENTE');
          askGuess();
        }
      });
    }
    console.log('Adivine el numero generado');
    askGuess();
  });
});
