export default function Entry(text) {
  this.text = text;
}

Entry.prototype.wordCounter = function(text) {
  let wordcount = 0;
  const wordArray = text.split(" ");
  wordArray.forEach(function(element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount
}




/*
JavaScript
Create Entry objects that include a method to return the number of words in the entry. 

Then, add a separate method (or methods) to return the number of vowels and consonants in each entry. 

Finally, add a method called getTeaser to return the first sentence of the entry. 

If the sentence is over 8 words, only display those first 8 words.
*/
