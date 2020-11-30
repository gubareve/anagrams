import words from './words.js';

function *permute(a, n = a.length) {
  if (n <= 1) yield a.slice();
  else for (let i = 0; i < n; i++) {
    yield *permute(a, n - 1);
    const j = n % 2 ? 0 : i;
    [a[n-1], a[j]] = [a[j], a[n-1]];
  }
}

export default function findAnagrams(Input) {
  Input = Input.toLowerCase();
  let permutations = Array.from(permute(Input.split('')))
  .map(perm => perm.join(''))
  .filter((el, idx, self) => (self.indexOf(el) === idx))  
  return (
    permutations.filter(value=>words.includes(value) && value!==Input)
  );
};