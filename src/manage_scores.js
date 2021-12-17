export default class ScoreLybrary {
  constructor() {
    this.get();
  }

  get = async () => {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/th5xBYWSs5VtsOmKTkPd/scores/');
    return response.json();
  }

  send = async (newScore) => {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/th5xBYWSs5VtsOmKTkPd/scores/', {
      method: 'POST',
      body: JSON.stringify(newScore),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    });

    return response.json();
  }
}