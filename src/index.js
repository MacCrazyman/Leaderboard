// imports
import './style.css';
import scoreLibrary from './manage_scores.js'
// global variables
const score = new scoreLibrary();
// query selectors
const scoreForm = document.querySelector('#score_form');
const playerName = document.querySelector('#name_input');
const playerScore = document.querySelector('#score_input');
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