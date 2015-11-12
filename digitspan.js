var diplayNum;
var truth;
var index;
var interval;
var length;

function initiate() {
    length = 3;
    iteration = 1;
    wrong = 0;
}

function run() {
    index = length;
    truth = "";
    $("#startButton").hide();
    $('#intro').trigger('showIteration', iteration);
    interval = setInterval(function() {
	nextDigit();
    }, 1000);
}


function nextDigit() {
    if (index > 0) {
	var digit = getRandomInt(1,10);
	$('#digitDisplay').trigger('showDigit', digit);
	setTimeout(function() {
	    $('#digitDisplay').trigger('showDigit', " ");
	}, 500);
	truth = truth.concat(digit);
	index--;
    } else {
	$('#digitDisplay').trigger('showDigit', " ");
	endloop();
	clearInterval(interval);
    }
}

function endloop() {
    $("#digitDisplay").hide();
    $("#entry").show();
    $('#intro').trigger('changeButton', "Next");
}

function calc() {
    var guess = document.getElementById("guessbox").value;
    $("#digitDisplay").show();
    $("#entry").hide();
    $('#guessbox').val('');
    $("#startButton").show();
    if (guess!=truth) {
	wrong++;
	$('#digitDisplay').trigger('showDigit', "Incorrect. You said " + guess + " but the answer was " + truth);
    } else {
	$('#digitDisplay').trigger('showDigit', "Correct!");
    }
    truth="";
    if (wrong > 1) {
	var score = length - 1;
	$('#digitDisplay').trigger('showDigit', "Your digit span score is: " + score);
	$("#startButton").hide();
    }
    iteration++;
    if (iteration > 6) {
	length ++;
	iteration = 1;
	wrong = 0;
	$('#intro').trigger('showLength', length);
    }
    
}


// Returns a random integer between min (included) and max (excluded)
// Using Math.round() will give you a non-uniform distribution!
// Taken from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
