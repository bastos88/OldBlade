import { schedulesHour } from "../schedules/load";

// Registra o handler de alteração da data após o DOM estar pronto.
function setupDateChange() {
  const selectedDate = document.getElementById("date");
  if (!selectedDate) return;
  selectedDate.onchange = () => {
    schedulesHour();
  };
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", setupDateChange);
} else {
  setupDateChange();
}
