export default class scoreLybrary {
  constructor() {
    fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/th5xBYWSs5VtsOmKTkPd/scores/',).then((response) => response.json())
    .then((json) => this.list=json.result);

    
  }
}