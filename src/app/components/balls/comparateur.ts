export function comparateur(input) {
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
        }
      }
    }
  }
}
