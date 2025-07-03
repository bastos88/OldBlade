import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hours.js";
import { hoursSelected } from "./hours-selected.js";

const hours = document.getElementById("hours");

export function hoursLoad({ date }) {
  hours.innerHTML = "";
  const opening = openingHours.map((hour) => {
    //recupera só a hora
    const [schedulesHour] = hour.split(":");

    // adciona a hora na data e verifica se está no passado.

    const isHourPast = dayjs(date).add(schedulesHour, "hour").isAfter(dayjs());
    console.log(isHourPast);

    // Define se o horário esta disponível
    return {
      hour,
      available: isHourPast,
    };
  });

  // Renderizar os horários

  opening.forEach(({ hour, available }) => {
    const li = document.createElement("li");
    li.classList.add("hour");
    li.classList.add(available ? "hour-available" : "hour-unavailable");

    li.textContent = hour;

    if (hour === "09:00") {
      hourHeader("Manhã");
    } else if (hour === "13:00") {
      hourHeader("Tarde");
    } else if (hour === "18:00") {
      hourHeader("Noite");
    }
    hours.append(li);
  });

  // deixa o horário selecionado ao clicar
  hoursSelected();
}

function hourHeader(title) {
  const header = document.createElement("li");
  header.classList.add("hour-period");
  header.textContent = title;

  hours.append(header);
}
