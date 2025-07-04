import dayjs from "dayjs";
import { apiConfig } from "./api-config";
export async function scheduleByDay({ date }) {
  try {
    // faz a requisição
    const response = await fetch(`${apiConfig.baseURL}/schedules`);

    // converte para JSON
    const data = await response.json();

    // filtra os agendamentos pelo dia
    const dailySchedules = data.filter((schedule) =>
      dayjs(schedule.when).isSame(dayjs(date), "day")
    );
    return dailySchedules;
  } catch (error) {
    alert("Não foi possível buscar os agendamentos solicitados");
  }
}
