export function hoursSelected() {
  const hours = document.querySelectorAll(".hour-available");
  hours.forEach((available) => {
    available.addEventListener("click", (selected) => {
      hours.forEach((hour) => {
        //remove a classe de todas as li's não clicadas
        hour.classList.remove("hour-selected");
      });
      // adciona a classe na li clicada
      selected.target.classList.add("hour-selected");
    });
  });
}
