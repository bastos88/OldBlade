import { hoursLoad } from "../form/hours-load.js";

// seleciona o input de date

const selectedDate = document.getElementById("date");

export function schedulesHour() {
  // obtém a data do input
  const date = selectedDate.value;

  hoursLoad({ date });
}
schedulesHour();
