
const readline = require('readline');
//Generator
function rand(min = 1, max = 100) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// Range
rl.question('Ingrese el valor mínimo: ', (minInput) => {
  const min = parseInt(minInput, 10);
  rl.question('Ingrese el valor máximo: ', (maxInput) => {
    const max = parseInt(maxInput, 10);
    if (isNaN(min) || isNaN(max) || min > max) {
      console.log('Rango inválido. Intente de nuevo.');
      rl.close();
      return;
    }
    const num = rand(min, max);
    function preguntarAdivina() {
      rl.question('Ingrese su número: ', (guessInput) => {
        const guess = parseInt(guessInput, 10);
        if (isNaN(guess)) {
          console.log('Por favor, ingrese un número válido.');
          preguntarAdivina();
          return;
        }
        const diff = Math.abs(num - guess);
        if (guess === num) {
          console.log(`PERFECT! El número era: ${num}`);
          rl.close();
        } else if (diff > 1000) {
          console.log('ANTARTIDA');
          preguntarAdivina();
        } else if (diff >= 100) {
          console.log('FRIO');
          preguntarAdivina();
        } else if (diff >= 50) {
          console.log('templado');
          preguntarAdivina();
        } else if (diff >= 10) {
          console.log('caliente');
          preguntarAdivina();
        } else {
          console.log('Muy cerca!');
          preguntarAdivina();
        }
      });
    }
    console.log(`Adivine el numero generado`);
    preguntarAdivina();
  });
});
