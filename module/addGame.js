// import { showMessage } from "./handleError";
import { baseUrl } from "./api";

export const createGame = async (gameName) => {
  try {
    const response = await fetch(`${baseUrl}games/`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ name: gameName }),
    });
    const responseData = await response.json();
    return responseData.result;
  } catch (error) {
    // showMessage("An error occurred. Please try again later", true);
    console.error("Error creating game:", error);
    throw new Error("Failed to create game. Please try again later.");
  }
};
