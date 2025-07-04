import dayjs from "dayjs";
import { newSchedule } from "../../services/schedules.js";
import { schedulesHour } from "../schedules/load.js";

const form = document.querySelector("form");
const dateSelected = document.getElementById("date");
const clientName = document.getElementById("client");

// input data atual
const inputDay = dayjs(new Date()).format("YYYY-MM-DD");

//carrega da data atual no formulário
dateSelected.value = inputDay;

// Define a data mínima como sendo a data atual para que não seja possível agendar em dias que ja se passaram.
dateSelected.min = inputDay;

form.onsubmit = async (event) => {
  event.preventDefault();

  try {
    const name = clientName.value.trim();
    console.log(name);
    if (!name) {
      alert("Insira o nome do cliente");
    }

    // Seleciona o horário
    const hourSelected = document.querySelector(".hour-selected");
    if (!hourSelected) {
      alert("Informe o horário desejado");
    }

    // seleciona só a hora
    const [hour] = hourSelected.innerText.split(":");

    // Insere a hora na data selecionada

    const when = dayjs(dateSelected.value).add(hour, "hour");

    // gera um ID para cada agendamento

    const id = new Date().getTime();
    await newSchedule({
      id,
      name,
      when,
    });

    //recarrega os agendamentos
    await schedulesHour();
    clientName.value = "";
  } catch (error) {
    alert("Não foi possível realizar o agendamento.");
    console.log(error);
  }
};
