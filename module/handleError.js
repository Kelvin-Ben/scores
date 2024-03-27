export function showMessage(message, isError = false) {
  const messageElement = document.createElement("span");
  messageElement.textContent = message;
  messageElement.classList.add("message", isError ? "error" : "success");
  document.body.appendChild(messageElement);

  setTimeout(() => {
    messageElement.remove();
  }, 3000);
}
