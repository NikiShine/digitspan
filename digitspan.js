var diplayNum;
var truth;
var guess;
var index;


function run(length) {
    index = length
    window.setInterval(function() {
	nextDigit();
    }, 1000);
}


function nextDigit() {
    if (index > 0) {
	var digit = getRandomInt(1,10);
	$('#digitDisplay').trigger('showDigit', digit);
	/*window.setTimeout(function() {
	    $('#digitDisplay').trigger('showDigit', "");
	}, 100);*/
	index--;
    } else {
	window.clearInterval();
    }
}



// Returns a random integer between min (included) and max (excluded)
// Using Math.round() will give you a non-uniform distribution!
// Taken from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
