export function comparateur(input) {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 0eaaa786dbc5e6b2a92f4ac0c89188a4ac848d61
  let i: number;
  let c: number;
  let output = {};
  for (i = 0, c = (this.nbballs.length - 1); i <= c; i++) {
    if (input[i] !== input[i + 1]) {
      if ((i + 1) === (this.nbballs.length - 1)) {
        output = {
          'numeroballon' : this.nbballs[i + 1],
          'nbfoisrelancer' : (i + 1)
        };
        return output;
      } else {
        if (input[i + 1] !== input[i + 2]) {
          output = {
            'numeroballon' : this.nbballs[i + 1],
            'nbfoisrelancer' : (i + 1)
          };
          return output;
        } else {
          output = {
            'numeroballon' : this.nbballs[i + 1],
            'nbfoisrelancer' : (i + 1)
          };
          return output;
<<<<<<< HEAD
=======
=======
  console.log(input);
  let i: number;
  let c: number;
  for (i = 0, c = (this.nbballs.length - 1); i <= c; i++) {
    if (input[i] !== input[i + 1]) {
      if ((i + 1) === (this.nbballs.length - 1)) {
        return this.nbballs[i + 1];
      } else {
        if (input[i + 1] !== input[i + 2]) {
          return this.nbballs[i + 1];
        } else {
          return this.nbballs[i];
>>>>>>> f6d5c293fd236d058c2f7a4008371eaa8f92b009
>>>>>>> 0eaaa786dbc5e6b2a92f4ac0c89188a4ac848d61
        }
      }
    }
  }
}
