import { scheduleCancel } from "../../services/cancel-schedules.js";
import { schedulesHour } from "../schedules/load.js";

const periods = document.querySelectorAll(".period");

periods.forEach((period) => {
  period.addEventListener("click", async (e) => {
    if (e.target.classList.contains("cancel-icon")) {
      const item = e.target.closest("li");
      const { id } = item.dataset;
      const idNumber = Number(id);

      if (idNumber) {
        const isConfirm = confirm("Deseja cancelar o agendamento?");

        if (isConfirm) {
          await scheduleCancel({ id: idNumber });
          schedulesHour();
        }
      }
    }
  });
});
