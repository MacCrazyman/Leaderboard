// imports
import './style.css';
import scoreLibrary from './manage_scores.js'
import * as DOM from './dom_manipulation.js'
// global variablesx
const score = new scoreLibrary();
// score[list].forEach((scoreData) => DOM.createScore(scoreData));
// query selectors
const scoreForm = document.querySelector('#score_form');
const playerName = document.querySelector('#name_input');
const playerScore = document.querySelector('#score_input');
const refresButton = document.querySelector('#refresh_button');
const scoreTable = document.querySelector("#score_table");
// functions

// event listeners
scoreForm.addEventListener('submit', (event) => {
  event.preventDefault();
  var newScore = {
    "user": playerName.value,
    "score": playerScore.value,
  }
  score.send(newScore).then(() => {
    playerScore.value='';
    playerName.value='';
  });
})

refresButton.addEventListener('click', (e) => {
  scoreTable.innerHTML = '';
  score.list.forEach(element => {
    DOM.createScore(element);
  });
})