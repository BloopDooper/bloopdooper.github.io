var board = ['', '', '', '', '', '', '', '', ''];
var currentPlayer = 'human';

// Fill in cells

function box1click() {
	var elem = document.getElementById("box1");
	if (elem.value == " ") {
		elem.value = "X";
		board[0] = 'X';
		currentPlayer = 'ai';
		checkWin();
		bestMove();
	}
	else if (elem.value == "X" || elem.value == "O") {
		alert("This box already taken!")
	}
	else elem.value = " ";
}
function box2click() {
	var elem = document.getElementById("box2");
	if (elem.value == " ") {
		elem.value = "X";
		board[1] = 'X';
		currentPlayer = 'ai';
		checkWin();
		bestMove();
	}
	else if (elem.value == "X" || elem.value == "O") {
		alert("This box already taken!")
	}
	else elem.value = " ";
}
function box3click() {
	var elem = document.getElementById("box3");
	if (elem.value == " ") {
		elem.value = "X";
		board[2] = 'X';
		currentPlayer = 'ai';
		checkWin();
		bestMove();
	}
	else if (elem.value == "X" || elem.value == "O") {
		alert("This box already taken!")
	}
	else elem.value = " ";
}
function box4click() {
	var elem = document.getElementById("box4");
	if (elem.value == " ") {
		elem.value = "X";
		board[3] = 'X';
		currentPlayer = 'ai';
		checkWin();
		bestMove();
	}
	else if (elem.value == "X" || elem.value == "O") {
		alert("This box already taken!")
	}
	else elem.value = " ";
}
function box5click() {
	var elem = document.getElementById("box5");
	if (elem.value == " ") {
		elem.value = "X";
		board[4] = 'X';
		currentPlayer = 'ai';
		checkWin();
		bestMove();
	}
	else if (elem.value == "X" || elem.value == "O") {
		alert("This box already taken!")
	}
	else elem.value = " ";
}
function box6click() {
	var elem = document.getElementById("box6");
	if (elem.value == " ") {
		elem.value = "X";
		board[5] = 'X';
		currentPlayer = 'ai';
		checkWin();
		bestMove();
	}
	else if (elem.value == "X" || elem.value == "O") {
		alert("This box already taken!")
	}
	else elem.value = " ";
}
function box7click() {
	var elem = document.getElementById("box7");
	if (elem.value == " ") {
		elem.value = "X";
		board[6] = 'X';
		currentPlayer = 'ai';
		checkWin();
		bestMove();
	}
	else if (elem.value == "X" || elem.value == "O") {
		alert("This box already taken!")
	}
	else elem.value = " ";
}
function box8click() {
	var elem = document.getElementById("box8");
	if (elem.value == " ") {
		elem.value = "X";
		board[7] = 'X';
		currentPlayer = 'ai';
		checkWin();
		bestMove();
	}
	else if (elem.value == "X" || elem.value == "O") {
		alert("This box already taken!")
	}
	else elem.value = " ";
}
function box9click() {
	var elem = document.getElementById("box9");
	if (elem.value == " ") {
		elem.value = "X";
		board[8] = 'X';
		currentPlayer = 'ai';
		checkWin();
		bestMove();
	}
	else if (elem.value == "X" || elem.value == "O") {
		alert("This box already taken!")
	}
	else elem.value = " ";
}

// ai

function bestMove() {
	if (currentPlayer == 'ai') {
		// ai first move
		if (board[4] == 'X' && board[0] == '') {
			board[0] = 'O';
			document.getElementById('box1').value = 'O'
		}
		else if ((board[0] == 'X' || board[1] == 'X' || board[2] == 'X' || board[3] == 'X' || board[5] == 'X' || board[6] == 'X' || board[7] == 'X' || board[8] == 'X') && board[4] == '') {
			board[4] = 'O';
			document.getElementById('box5').value = 'O'
		}
		// ai filling in winning move
		else if (board[0] == 'O' && board[1] == 'O' && board[2] == '') {
			board[2] = 'O';
			document.getElementById('box3').value = 'O'
		}
		else if (board[0] == 'O' && board[2] == 'O' && board[1] == '') {
			board[1] = 'O';
			document.getElementById('box2').value = 'O'
		}
		else if (board[0] == 'O' && board[3] == 'O' && board[6] == '') {
			board[6] = 'O';
			document.getElementById('box7').value = 'O'
		}
		else if (board[0] == 'O' && board[4] == 'O' && board[8] == '') {
			board[8] = 'O';
			document.getElementById('box9').value = 'O'
		}
		else if (board[0] == 'O' && board[6] == 'O' && board[3] == '') {
			board[3] = 'O';
			document.getElementById('box4').value = 'O'
		}
		else if (board[2] == 'O' && board[1] == 'O' && board[0] == '') {
			board[0] = 'O';
			document.getElementById('box1').value = 'O'
		}
		else if (board[2] == 'O' && board[4] == 'O' && board[6] == '') {
			board[6] = 'O';
			document.getElementById('box7').value = 'O'
		}
		else if (board[2] == 'O' && board[5] == 'O' && board[8] == '') {
			board[8] = 'O';
			document.getElementById('box9').value = 'O'
		}
		else if (board[2] == 'O' && board[8] == 'O' && board[5] == '') {
			board[5] = 'O';
			document.getElementById('box6').value = 'O'
		}
		else if (board[6] == 'O' && board[3] == 'O' && board[0] == '') {
			board[0] = 'O';
			document.getElementById('box1').value = 'O'
		}
		else if (board[6] == 'O' && board[4] == 'O' && board[2] == '') {
			board[2] = 'O';
			document.getElementById('box3').value = 'O'
		}
		else if (board[6] == 'O' && board[7] == 'O' && board[8] == '') {
			board[8] = 'O';
			document.getElementById('box9').value = 'O'
		}
		else if (board[6] == 'O' && board[8] == 'O' && board[7] == '') {
			board[7] = 'O';
			document.getElementById('box8').value = 'O'
		}
		else if (board[8] == 'O' && board[7] == 'O' && board[6] == '') {
			board[6] = 'O';
			document.getElementById('box7').value = 'O'
		}
		else if (board[8] == 'O' && board[5] == 'O' && board[2] == '') {
			board[2] = 'O';
			document.getElementById('box3').value = 'O'
		}
		else if (board[1] == 'O' && board[4] == 'O' && board[7] == '') {
			board[7] = 'O';
			document.getElementById('box8').value = 'O'
		}
		else if (board[3] == 'O' && board[4] == 'O' && board[5] == '') {
			board[5] = 'O';
			document.getElementById('box6').value = 'O'
		}
		else if (board[5] == 'O' && board[4] == 'O' && board[3] == '') {
			board[3] = 'O';
			document.getElementById('box4').value = 'O'
		}
		else if (board[7] == 'O' && board[4] == 'O' && board[1] == '') {
			board[1] = 'O';
			document.getElementById('box2').value = 'O'
		}


		// ai filling enemy winning spots (cell 1)


		else if (board[0] == 'X' && board[1] == 'X' && board[2] == '') {
			board[2] = 'O';
			document.getElementById('box3').value = 'O'
		}
		else if (board[0] == 'X' && board[2] == 'X' && board[2] == '') {
			board[2] = 'O';
			document.getElementById('box2').value = 'O'
		}
		else if (board[0] == 'X' && board[3] == 'X' && board[6] == '') {
			board[6] = 'O';
			document.getElementById('box7').value = 'O'
		}
		else if (board[0] == 'X' && board[4] == 'X' && board[8] == '') {
			board[8] = 'O';
			document.getElementById('box9').value = 'O'
		}
		else if (board[0] == 'X' && board[6] == 'X' && board[3] == '') {
			board[3] = 'O';
			document.getElementById('box4').value = 'O'
		}
		// ai filling enemy winning spots (cell 3)
		else if (board[2] == 'X' && board[1] == 'X' && board[0] == '') {
			board[0] = 'O';
			document.getElementById('box1').value = 'O'
		}
		else if (board[2] == 'X' && board[4] == 'X' && board[6] == '') {
			board[6] = 'O';
			document.getElementById('box7').value = 'O'
		}
		else if (board[2] == 'X' && board[5] == 'X' && board[8] == '') {
			board[8] = 'O';
			document.getElementById('box9').value = 'O'
		}
		else if (board[2] == 'X' && board[8] == 'X' && board[5] == '') {
			board[5] = 'O';
			document.getElementById('box6').value = 'O'
		}
		// ai filling enemy winning spots (cell 7)
		else if (board[6] == 'X' && board[3] == 'X' && board[0] == '') {
			board[0] = 'O';
			document.getElementById('box1').value = 'O'
		}
		else if (board[6] == 'X' && board[4] == 'X' && board[2] == '') {
			board[2] = 'O';
			document.getElementById('box3').value = 'O'
		}
		else if (board[6] == 'X' && board[7] == 'X' && board[8] == '') {
			board[8] = 'O';
			document.getElementById('box9').value = 'O'
		}
		else if (board[6] == 'X' && board[8] == 'X' && board[7] == '') {
			board[7] = 'O';
			document.getElementById('box8').value = 'O'
		}
		// ai filling enemy winning spots (cell 9)
		else if (board[8] == 'X' && board[7] == 'X' && board[6] == '') {
			board[6] = 'O';
			document.getElementById('box7').value = 'O'
		}
		else if (board[8] == 'X' && board[5] == 'X' && board[2] == '') {
			board[2] = 'O';
			document.getElementById('box3').value = 'O'
		}
		// ai filling enemy winning spots (cells 5)
		else if (board[1] == 'X' && board[4] == 'X' && board[7] == '') {
			board[7] = 'O';
			document.getElementById('box8').value = 'O'
		}
		else if (board[3] == 'X' && board[4] == 'X' && board[5] == '') {
			board[5] = 'O';
			document.getElementById('box6').value = 'O'
		}
		else if (board[5] == 'X' && board[4] == 'X' && board[3] == '') {
			board[3] = 'O';
			document.getElementById('box4').value = 'O'
		}
		else if (board[7] == 'X' && board[4] == 'X' && board[1] == '') {
			board[1] = 'O';
			document.getElementById('box2').value = 'O'
		}
		// ai fill in next avaliable spot if there is no winning point to gain or prevent
		else if (board[1] == '') {
			board[1] = 'O';
			document.getElementById('box2').value = 'O'
		}
		else if (board[2] == '') {
			board[2] = 'O';
			document.getElementById('box3').value = 'O'
		}
		else if (board[3] == '') {
			board[3] = 'O';
			document.getElementById('box4').value = 'O'
		}
		else if (board[5] == '') {
			board[5] = 'O';
			document.getElementById('box6').value = 'O'
		}
		else if (board[6] == '') {
			board[6] = 'O';
			document.getElementById('box7').value = 'O'
		}
		else if (board[7] == '') {
			board[7] = 'O';
			document.getElementById('box8').value = 'O'
		}
		else if (board[8] == '') {
			board[8] = 'O';
			document.getElementById('box9').value = 'O'
		}
	}
	checkWin()
	currentPlayer = 'human';
}

// Check Win

function checkWin() {
	// Check if X won
	if ((board[0] == 'X' && board[1] == 'X' && board[2] == 'X') || (board[3] == 'X' && board[4] == 'X' && board[5] == 'X') || (board[6] == 'X' && board[7] == 'X' && board[8] == 'X') || (board[0] == 'X' && board[3] == 'X' && board[6] == 'X') || (board[1] == 'X' && board[4] == 'X' && board[7] == 'X') || (board[2] == 'X' && board[5] == 'X' && board[8] == 'X') || (board[0] == 'X' && board[4] == 'X' && board[8] == 'X') || (board[2] == 'X' && board[4] == 'X' && board[6] == 'X')) {
		document.getElementById('resultsText').innerHTML = 'Results: You win! Refresh or run again to restart.';
		return;
	}
	// Check if O won
	else if ((board[0] == 'O' && board[1] == 'O' && board[2] == 'O') || (board[3] == 'O' && board[4] == 'O' && board[5] == 'O') || (board[6] == 'O' && board[7] == 'O' && board[8] == 'O') || (board[0] == 'O' && board[3] == 'O' && board[6] == 'O') || (board[1] == 'O' && board[4] == 'O' && board[7] == 'O') || (board[2] == 'O' && board[5] == 'O' && board[8] == 'O') || (board[0] == 'O' && board[4] && board[8] == 'O' == 'O') || (board[2] == 'O' && board[4] == 'O' && board[6] == 'O')) {
		document.getElementById('resultsText').innerHTML = 'Results: You lose! Refresh or run again to restart.';
		return;
	}
	// Check if tie
	else if (board[0] !== '' && board[1] !== '' && board[2] !== '' && board[3] !== '' && board[4] !== '' && board[5] !== '' && board[6] !== '' && board[7] !== '' && board[8] !== '') {
		document.getElementById('resultsText').innerHTML = 'Results: Tie! Refresh or run again to restart.'
	}
	else;
}