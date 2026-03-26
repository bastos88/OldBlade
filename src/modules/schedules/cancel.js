import { scheduleCancel } from "../../services/cancel-schedules.js";
import { schedulesHour } from "../schedules/load.js";

// Event delegation to handle clicks on dynamically created cancel icons
document.addEventListener("click", async (e) => {
  const target = e.target;
  if (!target || !target.classList) return;

  if (target.classList.contains("cancel-icon")) {
    const item = target.closest("li");
    if (!item) return;
    const { id } = item.dataset;
    if (!id) return;

    const isConfirm = confirm("Deseja cancelar o agendamento?");
    if (!isConfirm) return;

    try {
      await scheduleCancel({ id });
      schedulesHour();
    } catch (err) {
      console.log(err);
    }
  }
});
