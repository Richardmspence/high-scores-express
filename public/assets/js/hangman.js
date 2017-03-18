var words = ["theodore roosevelt", "franklin roosevelt", "richard nixon", "barack obama", "jimmy carter", "ronald reagan", "george bush", "donald trump", "bill clinton", "john kennedy", "abraham lincoln", "george washington"];

var randomIndex = Math.floor( Math.random() * words.length );

var randomWord = words[randomIndex];

var initialDisplay = "";
var guesses = [];

if (randomWord.indexOf(" ") >= 0){
	guesses.push(" ");

	for (var i=0; i<randomWord.length; i++){ 
		if (randomWord[i] == " "){
			initialDisplay += "&nbsp;&nbsp;&nbsp;";
		}
		else if (guesses.indexOf(randomWord[i]) >= 0){
			initialDisplay += randomWord[i];
		}else{
			initialDisplay += " _ ";
		}
	}
	$('#display').html(initialDisplay);
}else{
	for (var i=0; i<randomWord.length; i++){
		initialDisplay += " _ ";
	}

	$('#display').html(initialDisplay);
}

$(document).keyup(function(e) {
	var keyPressed = e.key; //this is a letter

	if (randomWord.indexOf(keyPressed) >= 0){ 
		guesses.push(keyPressed);
		
		initialDisplay = "";

		
		//we guessed h
		//guesses = [h,r];

		//randomWord = heroku 

		for (var i=0; i<randomWord.length; i++){ 
			if (guesses.indexOf(randomWord[i]) >= 0){
				initialDisplay += randomWord[i];
			}else{
				initialDisplay += " _ ";
			}
		}

		$('#display').html(initialDisplay);

	}else{
		console.log('LOSER!!!')
	}

});

















