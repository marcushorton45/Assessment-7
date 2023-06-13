// Problem 1: Sum zero

function hasSumToZero(numbers) {
    var seen = {};
    for (var i = 0; i < numbers.length; i++) {
      var num = numbers[i];
      if (seen[-num]) {
        return true;
      }
      seen[num] = true;
    }
    return false;
  }

// runtime O(n)


//  Problem 2: Unique characters

function hasUniqueCharacters(word) {
    var seen = {};
    for (var i = 0; i < word.length; i++) {
      var char = word[i];
      if (seen[char]) {
        return false;
      }
      seen[char] = true;
    }
    return true;
  }

// runtime O(n)


// Problem 3: Pangrams

const str = "The quick brown fox jumps over the lazy dog!"

const isPangram = (str = '') => {
    const { length } = str;
    const alphabets = 'abcdefghijklmnopqrstuvwxyz';
    const alphaArr = alphabets.split('');
    for(let i = 0; i < length; i++){
       const el = str[i];
       const index = alphaArr.indexOf(el);
       if(index !== -1){
          alphaArr.splice(index, 1);
       };
    };
    return !alphaArr.length;
 };
 console.log(isPangram(str));

// runtime O(n)


//   Problem 4: Longest word

function find_longest_word(words) {
    let longestWord = '';
    for (let i = 0; i < words.length; i++){
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }
    return longestWord.length;
}

// runtime O(n)