document.addEventListener("DOMContentLoaded", () => {
  const height = window.innerHeight;
  const width = window.innerWidth;
  const root = document.querySelector(".container");
  let divSize = 30;
  let numbersOfRows;
  let numbersOfColumns;
  if (width > 1024) {
    divSize = 34;
  }
  numbersOfColumns = Math.floor(width / divSize);
  numbersOfRows = Math.floor(height / divSize);
  document.documentElement.style.setProperty(
    "--numberOfColumns",
    numbersOfColumns
  );
  numbersOfColumns = Math.ceil(width / (divSize - 10));
  numbersOfRows = Math.ceil(height / (divSize - 10));
  document.documentElement.style.setProperty("--numberOfRows", numbersOfRows);
  document.documentElement.style.setProperty("--divSize", divSize);
  for (let i = 0; i < numbersOfColumns * numbersOfRows; i++) {
    const div = document.createElement("div");
    div.classList.add("container__item");
    root.appendChild(div);
  }
});
