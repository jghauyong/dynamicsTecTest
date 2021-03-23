function alphabet(input) {
  const alphabet = 'abcdefghijklmnñopqrstuvwxyz';
  let output = '';

  for (let i = 0; i < input.length; i++) {
    let letter = input[i];
    const isUpperCase = letter === letter.toUpperCase()
    const exists = alphabet.indexOf(letter.toLowerCase()) + 1;
    if (exists) {
      letter = alphabet[exists] || alphabet[0];
    }

    output += isUpperCase ? letter.toUpperCase() : letter;
  }

  console.log(`Input: ${ input }, Output: ${ output }`);
}

alphabet('123 abcd*3');
alphabet('**Casa 52z');
