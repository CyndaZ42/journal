export default function Entry(title, text) {
  this.title = title;
  this.text = text;
}

Entry.prototype.wordCounter = function() {
  let wordCount = 0;
  const wordArray = this.text.split(" ");
  wordArray.forEach(function(element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount
}

Entry.prototype.vowelCount = function() {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
  const vowelCount = countLetters(vowels, this.text);
  return vowelCount;
}

Entry.prototype.consonantCount = function() {
  const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'y', 'z'];
  const consonantCount = countLetters(consonants, this.text);
  return consonantCount;
}

Entry.prototype.getTeaser = function() {
  const sentenceArray = this.text.trim().split('.');
  const firstSentence = sentenceArray[0].split(' ');
  if (firstSentence.length > 8) {
    let outputArray = [];
    for(let i = 0; i < 8; i++) {
      outputArray.push(firstSentence[i]);
    }
    return outputArray.join(" ");
  } else {
    return firstSentence.join(" ") + '.';
  }
 }

function countLetters(type, text) {
  let count = 0;
  const wordArray = text.trim().toLowerCase().split(' ');
  wordArray.forEach(function(element) {
    const charArray = element.split('');
    charArray.forEach(function(letter) {
      if (type.includes(letter)) {
        count++;
      }
    });
  });
  return count;
}



/*
JavaScript
Create Entry objects that include a method to return the number of words in the entry. 

Then, add a separate method (or methods) to return the number of vowels and consonants in each entry. 

Finally, add a method called getTeaser to return the first sentence of the entry. 

If the sentence is over 8 words, only display those first 8 words.
*/
