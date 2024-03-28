import { baseUrl } from "./api";
// fetch data from endpoint so that the element is created

export const displayScores = async (gameId) => {
  try {
    const response = await fetch(`${baseUrl}games/${gameId}/scores`, {
      cache: "no-cache",
    });
    if (response.ok) {
      const data = await response.json();
      const scoreList = document.querySelector(".scores");
      scoreList.innerHTML = "";
      data.result.forEach((score) => {
        const scoreItem = document.createElement("li");
        scoreItem.classList.add("score");
        scoreItem.textContent = `${score.user}: ${score.score}`;
        scoreList.appendChild(scoreItem);
      });
    }
  } catch (error) {
    console.error("Error fetching scores:", error);
    throw new Error("Failed to fetch scores. Please try again later.");
  }
};
