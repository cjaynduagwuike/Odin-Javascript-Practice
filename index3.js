let i = +prompt("What number would you like to find the primes to it?");

upper: for (let n = 2; n <= i; n++) {
  for (let a = 2; a < n; a++) {
    if (n % a == 0) {
      continue upper;
    }
  }
  console.log(n);
}
