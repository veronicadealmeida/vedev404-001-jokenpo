var playerName;
var computerOption = 0;
var playerOption = 0;
var winner;
var playerPoints = 0;
var computerPoints = 0;

document.getElementById('player-choice-1').onclick = () => {
  jogar(1);
};

document.getElementById('player-choice-2').onclick = () => {
  jogar(2);
};

document.getElementById('player-choice-3').onclick = () => {
  jogar(3);
};

showPlayerName();

//---------------------------------------------------------------------------
function jogar(option) {
  computerOption = getMachineOption(1, 3);

  playerOption = option;
  enableOption(1, playerOption);
  enableOption(2, computerOption);

  winner = checkWinner(playerOption, computerOption);
  addPoints(winner);
  showResult(winner);

  setTimeout(() => {
    clearMessage(), clearOptions(), addOptionMessage();
  }, 1500);
}

//---------------------------------------------------------------------------
function clearMessage() {
  let winnerLoserMessage = document.getElementById('winner');

  winnerLoserMessage.innerText = '';
  winnerLoserMessage.className = '';
}

//---------------------------------------------------------------------------
function clearOptions() {}
document.getElementById('player-choice-1').className = 'inactive';
document.getElementById('player-choice-2').className = 'inactive';
document.getElementById('player-choice-3').className = 'inactive';

document.getElementById('computer-choice-1').className = 'inactive';
document.getElementById('computer-choice-2').className = 'inactive';
document.getElementById('computer-choice-3').className = 'inactive';

//---------------------------------------------------------------------------
function addOptionMessage() {
  document.getElementById('message').innerHTML = 'Escolha uma opção ...';
}

//---------------------------------------------------------------------------
function showResult(winner) {
  let winnerLoserMessage = document.getElementById('winner');
  let optionMessage = document.getElementById('message');

  if (winner === 1) {
    winnerLoserMessage.className = 'winner';
    winnerLoserMessage.innerText = 'Você ganhou!!!';
  } else if (winner === 2) {
    winnerLoserMessage.className = 'loser';
    winnerLoserMessage.innerText = 'Você perdeu  :(';
  } else {
    winnerLoserMessage.className = 'tie';
    winnerLoserMessage.innerText = 'Empate';
  }

  optionMessage.id = '...';
}

//---------------------------------------------------------------------------
function addPoints(winner) {
  if (winner === 1) {
    playerPoints++;
    document.getElementById('player-points').innerText = playerPoints;
  } else if (winner === 2) {
    computerPoints++;
    document.getElementById('computer-points').innerText = computerPoints;
  }
}

//---------------------------------------------------------------------------
function checkWinner(playerOption, computerOption) {
  // 0 - Empate
  // 1 - Jogador
  // 2 - Computador
  if (
    (playerOption === 1 && computerOption === 3) ||
    (playerOption === 2 && computerOption === 1) ||
    (playerOption === 3 && computerOption === 2)
  ) {
    return 1;
  }

  if (playerOption === computerOption) {
    return 0;
  }

  return 2;
}
//---------------------------------------------------------------------------
function enableOption(type, option) {
  let idName = type === 1 ? 'player-choice-' : 'computer-choice-';

  document.getElementById(idName + '1').className = '';
  document.getElementById(idName + '2').className = '';
  document.getElementById(idName + '3').className = '';

  document.getElementById(idName + option).className = 'active';
}

//---------------------------------------------------------------------------
function getMachineOption(min, max) {
  let choice = Math.floor(Math.random() * (max - min + 1)) + min;

  return choice;
}
//---------------------------------------------------------------------------
function showPlayerName() {
  playerName = prompt('Informe seu nome:');

  playerName = playerName[0].toUpperCase() + playerName.substring(1);

  document.getElementById('player-name').innerHTML = playerName;
  document.getElementById(
    'message'
  ).innerHTML = `Olá, ${playerName}. Está preparado (a)? Escolha uma opção...`;
}
