export function comparateur(input) {
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
        }
      }
    }
  }
}
