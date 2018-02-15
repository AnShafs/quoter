$(document).ready(function() {
  $("#next_quote").on('click', function(){

  $.getJSON("https://gist.githubusercontent.com/AnShafs/f3b61c5d77a59923ed70f0d88d66e18f/raw/03470a0052e721b665aa3de2453946194464e715/quotes.json"
, function(json){
    var num = Math.floor(Math.random()*(json.length));
    var newQuote = json[num];
    var textQuote = newQuote["quote"];
    var authorQuote = newQuote["author"];
    $("#main_text").html(textQuote);
    $("#author").html("~ " + authorQuote);
  });
});

$("#twit").on('click', function() {
   var quote = $("#main_text").html();
   var author = $("#author").html();
   var tweetUrl = 'https://twitter.com/share?text=' + encodeURIComponent(quote) + encodeURIComponent(author) +
    '.' +
    '&url=' +
    'https://codepen.io/anshafs/full/OmOdbp/';

   window.open(tweetUrl);
});
});
