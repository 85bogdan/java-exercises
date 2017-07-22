var newGameBtn = document.getElementById('js-newGameButton');

var pickRock = document.getElementById('js-playerPick_rock');
var pickPaper = document.getElementById('js-playerPick_paper');
var pickScissors = document.getElementById('js-playerPick_scissors');

var gameState = 'notStarted';  
var player = {
		name: '',
		score: 0
	};
var computer = {
		score: 0
	};

var newGameElem = document.getElementById('js-newGameElement');
var pickElem = document.getElementById('js-playerPickElement');
var resultsElem = document.getElementById('js-resultsTableElement');

var winDialogElem = document.getElementById('js-winDialog');
var loseDialogElem = document.getElementById('js-loseDialog');

var playerPointsElem = document.getElementById('js-playerPoints');
var playerNameElem = document.getElementById('js-playerName');
var computerPointsElem = document.getElementById('js-computerPoints');

var playerPickElem = document.getElementById('js-playerPick');
var computerPickElem = document.getElementById('js-computerPick');
var playerResultElem = document.getElementById('js-playerResult');
var computerResultElem = document.getElementById('js-computerResult');


newGameBtn.addEventListener('click', newGame);

pickRock.addEventListener('click', function() { playerPick('rock') });
pickPaper.addEventListener('click', function() { playerPick('paper') });
pickScissors.addEventListener('click', function() { playerPick('scissors') });

setGameElements();

function newGame() {
	player.name = prompt('Please enter your name', 'imię gracza');
	if (player.name) {
		player.score = computer.score = 0;
		gameState = 'started';
		setGameElements();

	playerNameElem.innerHTML = player.name;
	setGamePoints();
	}

}

function setGameElements() {
	switch(gameState) {
		case 'started':
			newGameElem.style.display = 'none';
			pickElem.style.display = 'block';
			resultsElem.style.display = 'block';
			winDialogElem.style.display = 'none';
			loseDialogElem.style.display = 'none';
		break;
		case 'ended':
			newGameBtn.innerText = 'Jeszcze raz';
		case 'notStarted':
		default:
			newGameElem.style.display = 'block';
			pickElem.style.display = 'none';
			resultsElem.style.display = 'none';
			winDialogElem.style.display = 'none';
			loseDialogElem.style.display = 'none';
	}
}

function getComputerPick() {
	var possiblePicks = ['rock', 'paper', 'scissors'];
	return possiblePicks[Math.floor(Math.random()*3)];
}

function checkRoundWinner(playerPick, computerPick) {
	playerResultElem.innerHTML = computerResultElem.innerHTML = '';

	
		if (playerPick == computerPick) {
			playerResultElem.innerHTML = computerResultElem.innerHTML = 'draw'
		} else if (
			(computerPick == 'rock' &&  playerPick == 'scissors') ||
			(computerPick == 'scissors' &&  playerPick == 'paper') ||
			(computerPick == 'paper' &&  playerPick == 'rock')) {

			computerResultElem.innerHTML = "Win!";
			computer.score++;
		}else {
			playerResultElem.innerHTML = "Win!";
			player.score++;
		}

	 	setGamePoints();
    	endedGame();
}

function playerPick(playerPick) {
	var computerPick = getComputerPick();

	playerPickElem.innerHTML = playerPick;
	computerPickElem.innerHTML = computerPick;

	checkRoundWinner(playerPick, computerPick);
}

function setGamePoints() {
	playerPointsElem.innerHTML = player.score;
	computerPointsElem.innerHTML = computer.score;
}

function endedGame(){
	if ((player.score == 10) || (computer.score == 10)){
		setGamePoints();
		gameState = 'ended';
		setGameElements();
		
		if (player.score == 10){
			$("#js-winDialog").dialog();
		}else{
			$("#js-loseDialog").dialog();
		} 
		
	} 
}