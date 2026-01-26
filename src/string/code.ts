type Obj = {
  [key: string]: number;
};
function wordCount(str: string): Obj {
  let obj: Obj = {};
  let words: string[] = str.split(' ');
  for (let w of words) {
    obj[w] = (obj[w] || 0) + 1;
  }
  return obj;
}
// console.log(wordCount('Java Script Mahfuj bhai'));
function longestWord(str: string): string {
  let word: string = str
    .split(' ')
    .reduce((cur, acc) => (acc.length > cur.length ? acc : cur), '');

  return word;
}
// console.log(longestWord('Java Script MahfujBhhai'));
function removeDuplictae(str: string): string {
  return [...new Set<string>(str)].join('');
}
// console.log(longestWord('Bananana Bananana '));

function freqMap(str: string): Obj {
  let obj: Obj = {};
  for (let ch of str) {
    obj[ch] = (obj[ch] || 0) + 1;
  }
  return obj;
}
// console.log(freqMap('HOwarnatiii'));
