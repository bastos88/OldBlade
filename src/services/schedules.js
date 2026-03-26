import { apiConfig } from "./api-config.js";

export async function newSchedule({ id, name, when }) {
  try {
    const payload = {
      id: String(id),
      name,
      when:
        when && typeof when.toISOString === "function"
          ? when.toISOString()
          : String(when),
    };

    await fetch(`${apiConfig.baseURL}/schedules`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
  } catch (error) {
    console.log(error);
    alert("não foi possível realizar o agendamento");
  }
}
