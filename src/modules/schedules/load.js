import { scheduleByDay } from "../../services/schedule-by-day.js";
import { schedulesShow } from "../schedules/show.js";
import { hoursLoad } from "../form/hours-load.js";
// seleciona o input de date

const selectedDate = document.getElementById("date");

export async function schedulesHour() {
  // obtém a data do input
  const date = selectedDate.value;

  // busca os agendamentos na api
  //const bookDays = await scheduleByDay({ date });
  const bookDays = await scheduleByDay({ date });
  // exibe os agendamentos

  schedulesShow({ bookDays });
  hoursLoad({ date, bookDays });
}
