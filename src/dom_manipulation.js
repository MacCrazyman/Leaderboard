// variables
const scoreTable = document.querySelector('#score_table');
// functions
const createScore = (scoreData) => {
  // create elements
  const tableRow = document.createElement('tr');
  const tableName = document.createElement('td');
  const tableScore = document.createElement('td');
  // set properties
  tableName.textContent = scoreData.user;
  tableScore.textContent = scoreData.score;
  // append
  tableRow.appendChild(tableName);
  tableRow.appendChild(tableScore);
  scoreTable.appendChild(tableRow);
};

export default createScore;