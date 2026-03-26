import dayjs from "dayjs";
import { scheduleByDay } from "../../services/schedule-by-day.js";
import { schedulesShow } from "../schedules/show.js";
import { hoursLoad } from "../form/hours-load.js";

export async function schedulesHour() {
  // obtém a data do input
  const selectedDate = document.getElementById("date");
  const date = selectedDate
    ? selectedDate.value
    : dayjs(new Date()).format("YYYY-MM-DD");

  // busca os agendamentos na api
  const bookDays = await scheduleByDay({ date });

  // exibe os agendamentos
  schedulesShow({ bookDays });
  hoursLoad({ date, bookDays });
}
