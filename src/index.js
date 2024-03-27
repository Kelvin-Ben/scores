import _ from "lodash";
import "./style.css";
import { createGame } from "../module/addGame";
import { addScore } from "../module/addScore";
import { displayScores } from "../module/getScores";

// console.log(g)
const scoreForm = document.querySelector(".score-form");
// console.log(scoreForm);
const refreshButton = document.querySelector(".btn-refresh");

const gameForm = document.querySelector("#new-game-form");
gameForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const gameName = document.querySelector("#game-name").value.trim();
  if (gameName) {
    try {
      const gameId = await createGame(gameName);
      alert(`Game created successfully with ID: ${gameId}`);
    } catch (error) {
      alert(error.message);
    }
  }
});

scoreForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  // const gameId = "8KxQN8JEsLJHjYXAHA4Z ";
  const gameId = "VJ4h0YHaRn8XrWzKuzF8";
  const userName = document.querySelector(".input-name").value.trim();
  const userScore = document.querySelector(".input-score").value.trim();
  if (userName && userScore) {
    try {
      await addScore(gameId, userName, userScore);
      alert("Score added successfully.");
    } catch (error) {
      alert(error.message);
    }
  }
});
refreshButton.addEventListener("click", async () => {
  displayScores();
});
