/*
Construct string from another

Given two strings, str_a and str_b, compute the minimal
number of rounds it takes to construct str_b incrementally
by concatenating subsequences of str_a.

Note: Unlike a
"substring", a "subsequence" doesn't have to consist of
consecutive characters.

Example:
str_a: "aaaabbc"
str_b: "aacbbabc"

the answer is 3.
*/

const rounds = (str1, str2) => {
  let counter = 0
  let i = 0
  let j = 0

  const str1Chars = {}
  for (const char of str1) {
    if (!str1Chars[char]) str1Chars[char] = 1
  }

  while (j < str2.length) {
    if (!str1Chars[str2[j]]) return -1

    if (str1[i] === str2[j]) {
      j++
      i++
      if (i === str1.length) {
        counter++
        i = 0
      }
    };

    if (str1[i] !== str2[j]) { i++ };

    if (i === str1.length) {
      counter++
      i = 0
    }
  }


  return counter;
}

console.log(rounds("aaaabbc", "aacbbabc"))
