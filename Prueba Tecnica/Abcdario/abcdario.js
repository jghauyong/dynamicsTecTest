function arreglo(input) {
  let mayor = 0;
  const output = [];
  for (let x = 0; x < input.length; x++) {
    if (input[x] > mayor) {
      mayor = input[x];
    }
  }

  for (let x = 1; x <= mayor; x++) {
    output.push(x);
  }

  console.log({input, output});
}

arreglo([2, 1, 4, 5]);
arreglo([4, 2, 9]);
arreglo([58, 60, 55]);
