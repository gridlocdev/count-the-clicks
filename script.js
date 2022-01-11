let numberOfClicks;

function resetCounter() {
  numberOfClicks = 0;
  document.getElementById("numberOfClicks").textContent = 0;
}

function incrementCounter() {
  numberOfClicks++;
  document.getElementById("numberOfClicks").textContent = numberOfClicks;
}

window.onload = () => {
  resetCounter();

  document
    .querySelector("main")
    .addEventListener("click", () => incrementCounter());
};
