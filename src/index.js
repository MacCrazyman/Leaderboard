// imports
import './style.css';
import ScoreLibrary from './manage_scores.js';
import createScore from './dom_manipulation.js';
// global variablesx
const score = new ScoreLibrary();

// query selectors
const scoreForm = document.querySelector('#score_form');
const playerName = document.querySelector('#name_input');
const playerScore = document.querySelector('#score_input');
const refresButton = document.querySelector('#refresh_button');
const scoreTable = document.querySelector('#score_table');

// functions
const reloadTable = () => {
  scoreTable.innerHTML = '';
  score.get().then((json) => {
    score.list = json.result;
    score.list.sort((prev, next) => next.score - prev.score);
    score.list.forEach((element) => {
      createScore(element);
    });
  });
};

// event listeners
scoreForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const newScore = {
    user: playerName.value,
    score: playerScore.value,
  };
  score.send(newScore).then(() => {
    playerScore.value = '';
    playerName.value = '';
    reloadTable();
  });
});

refresButton.addEventListener('click', reloadTable);

window.onload = () => reloadTable();