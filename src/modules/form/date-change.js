import { schedulesHour } from "../schedules/load";
// seleciona o input de data
const selectedDate = document.getElementById("date");

selectedDate.onchange = () => {
  schedulesHour();
};
