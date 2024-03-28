import _ from "lodash";
import "./style.css";
import { createGame } from "../module/addGame";
import { addScore } from "../module/addScore";
import { displayScores } from "../module/getScores";

const scoreForm = document.querySelector(".score-form");
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

const gameId = "Z9nEin1TKlswqA181YJq";

scoreForm.addEventListener("submit", async (event) => {
  event.preventDefault();
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
const userName = document.querySelector(".input-name");
const userScore = document.querySelector(".input-score");
const gameName = document.querySelector("#game-name");

refreshButton.addEventListener("click", async () => {
  displayScores(gameId);
  userName.value = "";
  userScore.value = "";
  gameName.value = "";
});
