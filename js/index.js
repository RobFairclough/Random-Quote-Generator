$(document).ready(function() {
  
  var quoteArray = [
  {quote: "Hello there",
  author: "Obi-Wan Kenobi"},
  {quote: "General Kenobi",
  author: "General Grievious"},
  {quote: "You miss 100% of the shots you don't take",
  author: "Wayne Gretzky"},
  {quote: "You miss 100% of the shots you don't take - Wayne Gretzky",
  author: "Michael Scott"},
  {quote: "Another one",
  author: "DJ Khaled"},
  {quote: "Meow",
   author: "Buster (my cat)"}
    //add quotes here to expand the machine!
];
function rand(i) {
  return Math.floor(Math.random() * i)
}; //random number generator to slim down the generate quote function


$('#generateQuote').on('click', function() {
  var item = rand(quoteArray.length);
  document.getElementById('displayQuote').className = "animated fadeOut text-center text-secondary";
  document.getElementById('displayAuthor').className = "animated fadeOut text-center"; //animate fadeout before new quote displays
  setTimeout(function(){
  $('#displayQuote').html(quoteArray[item].quote)
  $('#displayAuthor').html(" - " + quoteArray[item].author)}, 500)
  //changes quote then delays 0.5seconds to allow animation finish before next quote displays
 setTimeout(function() {document.getElementById('displayQuote').className = "animated fadeIn text-center text-secondary", document.getElementById('displayAuthor').className = "animated fadeIn text-center"}, 500); //animate fadein
}); //creates quote, randomly selected from array

$('#tweetbutton').on('click', function() {
  var tweetQuote = "\"" + $('#displayQuote').text() + "\"" + $('#displayAuthor').text() + " (Quote provided by Rob's quote machine)";
  var tweetLink = 'http://twitter.com/home?status=' +encodeURIComponent(tweetQuote); //escapes special characters so the tweet URL functions even with hyphens and quotation marks
  window.open(tweetLink, '_blank'); 
  
  }); //opens twitter in new window with tweet preloaded.
});