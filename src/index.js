import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import '/js/entry.js';
import '/js/vowels.js';


$("form#entry").submit(function(event) {
  event.preventDefault();
  const title = $("input#title").val();
  const body = $("input#body").val();
});


/*
HTML
  Create a journaling website where a user can write entries including at least a title and body. 

JavaScript
  Create Entry objects that include a method to return the number of words in the entry. 

  Then, add a separate method (or methods) to return the number of vowels and consonants in each entry. 

  Finally, add a method called getTeaser to return the first sentence of the entry. 

  If the sentence is over 8 words, only display those first 8 words.
*/