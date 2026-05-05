import { paisCapital } from "../service/ejercicio21.js";

const paisSelect = document.getElementById("pais");
const capitalSelect = document.getElementById("capital");

paisSelect.addEventListener("change", function () {
  const pais = paisSelect.value;

  const capital = paisCapital[pais];

  capitalSelect.value = capital || "";

  const nombrePais =
    paisSelect.options[paisSelect.selectedIndex].text;

  const nombreCapital =
    capitalSelect.options[capitalSelect.selectedIndex]?.text || "Ninguna";

  console.log("País:", nombrePais);
  console.log("Capital:", nombreCapital);
});