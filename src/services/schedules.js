import { apiConfig } from "./api-config";

export async function newSchedule({ id, name, when }) {
  try {
    await fetch(`${apiConfig.baseURL}/schedules`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, name, when }),
    });
  } catch (error) {
    console.log(error);
    alert("não foi possível realizar o agendamento");
  }
}
