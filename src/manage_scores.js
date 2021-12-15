export default class scoreLybrary {
  constructor() {
    this.get()
  }

  get = async () => {
    fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/th5xBYWSs5VtsOmKTkPd/scores/',).then((response) => response.json())
    .then((json) => this.list=json.result);
  }

  send = async (newScore) => {
    fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/th5xBYWSs5VtsOmKTkPd/scores/',{
      method : "POST",
      body : JSON.stringify(newScore),
      headers : {'Content-type': 'application/json; charset=UTF-8',}
    })
  }
}