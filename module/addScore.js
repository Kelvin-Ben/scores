import { baseUrl } from "./api";
export const addScore = async (gameId, userName, userScore) => {
  try {
    const response = await fetch(`${baseUrl}games/${gameId}/scores/`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ user: userName, score: userScore }),
    });
    const data = response.json();

    return data.result;
  } catch (error) {
    console.log("Error adding score:", error);
    throw new Error("Failed to add score. Please try again later.");
  }
};
