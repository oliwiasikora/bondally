const tasks = [
  { text: "Zadzwoń do kogoś, z kim dawno nie rozmawiałaś, i zapytaj, co u niego naprawdę słychać.", category: "znajomi", label: "Znajomi", time: "5 min" },
  { text: "Napisz do bliskiej osoby: „Dobrze, że jesteś”.", category: "rodzina", label: "Rodzina", time: "2 min" },
  { text: "Wyślij komuś wiadomość z jedną konkretną rzeczą, którą w nim cenisz.", category: "znajomi", label: "Znajomi", time: "3 min" },
  { text: "Powiedz komuś dzisiaj szczery komplement.", category: "obcy", label: "Obcy", time: "1 min" },
  { text: "Zapytaj kogoś: „Jak się dziś czujesz?” i wysłuchaj odpowiedzi bez przerywania.", category: "znajomi", label: "Znajomi", time: "5 min" },
  { text: "Odezwij się do osoby, za którą tęsknisz.", category: "znajomi", label: "Znajomi", time: "2 min" },
  { text: "Podziękuj komuś za coś, co zwykle uznajesz za oczywiste.", category: "znajomi", label: "Znajomi", time: "2 min" },
  { text: "Napisz do osoby, z którą kiedyś byłaś blisko, ale kontakt się urwał.", category: "znajomi", label: "Znajomi", time: "4 min" },
  { text: "Zaproś kogoś na spacer, kawę albo krótką rozmowę.", category: "znajomi", label: "Znajomi", time: "10 min" },
  { text: "Powiedz bliskiej osobie, że jesteś z niej dumna.", category: "rodzina", label: "Rodzina", time: "1 min" },
  { text: "Wyślij komuś stare wspólne zdjęcie i przypomnij miły moment.", category: "znajomi", label: "Znajomi", time: "3 min" },
  { text: "Zapytaj starszą osobę w rodzinie o historię z jej młodości.", category: "rodzina", label: "Rodzina", time: "10 min" },
  { text: "Napisz do kogoś, kto mógł ostatnio czuć się samotnie.", category: "znajomi", label: "Znajomi", time: "4 min" },
  { text: "Daj komuś pełną uwagę przez 10 minut bez telefonu.", category: "ja", label: "Uważność", time: "10 min" },
  { text: "Przeproś kogoś za coś, co odkładałaś.", category: "znajomi", label: "Znajomi", time: "3 min" },
  { text: "Powiedz komuś: „Dziękuję, że mogę na Ciebie liczyć”.", category: "rodzina", label: "Rodzina", time: "2 min" },
  { text: "Zapytaj kogoś, czego teraz potrzebuje.", category: "znajomi", label: "Znajomi", time: "3 min" },
  { text: "Wyślij komuś krótką głosówkę zamiast zwykłej wiadomości.", category: "znajomi", label: "Znajomi", time: "2 min" },
  { text: "Zrób coś małego dla domownika bez proszenia.", category: "rodzina", label: "Rodzina", time: "5 min" },
  { text: "Napisz do osoby, której sukces ostatnio Cię ucieszył.", category: "znajomi", label: "Znajomi", time: "2 min" },
  { text: "Zapytaj koleżankę lub kolegę, co ostatnio było dla nich trudne.", category: "znajomi", label: "Znajomi", time: "5 min" },
  { text: "Powiedz komuś, że jego obecność poprawia Ci dzień.", category: "znajomi", label: "Znajomi", time: "1 min" },
  { text: "Odezwij się do osoby, z którą ciągle przekładacie spotkanie.", category: "znajomi", label: "Znajomi", time: "3 min" },
  { text: "Zaproponuj pomoc komuś, kto ma teraz dużo na głowie.", category: "znajomi", label: "Znajomi", time: "5 min" },
  { text: "Zostaw komuś miłą karteczkę albo wiadomość.", category: "znajomi", label: "Znajomi", time: "3 min" },
  { text: "Podziękuj kasjerowi, kierowcy, baristce albo komuś, kto Cię obsługuje.", category: "obcy", label: "Obcy", time: "30 sek" },
  { text: "Uśmiechnij się do osoby, którą mijasz.", category: "obcy", label: "Obcy", time: "30 sek" },
  { text: "Powiedz „dzień dobry” komuś, kogo zwykle tylko mijasz.", category: "obcy", label: "Obcy", time: "30 sek" },
  { text: "Napisz do kogoś: „Pomyślałam dziś o Tobie”.", category: "znajomi", label: "Znajomi", time: "1 min" },
  { text: "Zadaj komuś pytanie o jego pasję albo coś, co lubi.", category: "znajomi", label: "Znajomi", time: "4 min" },
  { text: "Zapytaj bliską osobę, co mogłoby dziś ułatwić jej dzień.", category: "rodzina", label: "Rodzina", time: "3 min" },
  { text: "Wyślij komuś piosenkę, która Ci się z nim kojarzy.", category: "znajomi", label: "Znajomi", time: "2 min" },
  { text: "Powiedz komuś jedną rzecz, której się od niego nauczyłaś.", category: "znajomi", label: "Znajomi", time: "2 min" },
  { text: "Zapytaj kogoś o opinię i naprawdę jej wysłuchaj.", category: "znajomi", label: "Znajomi", time: "4 min" },
  { text: "Przypomnij komuś wspólne wspomnienie, które nadal Cię cieszy.", category: "znajomi", label: "Znajomi", time: "3 min" },
  { text: "Napisz wiadomość do osoby, której dawno nie mówiłaś nic miłego.", category: "znajomi", label: "Znajomi", time: "3 min" },
  { text: "Zaproś kogoś do wspólnego zrobienia czegoś prostego: obiadu, zakupów, spaceru.", category: "znajomi", label: "Znajomi", time: "10 min" },
  { text: "Daj komuś znać, że pamiętasz o ważnej dla niego sprawie.", category: "znajomi", label: "Znajomi", time: "2 min" },
  { text: "Zapytaj: „Czy chcesz porady, czy mam Cię po prostu wysłuchać?”.", category: "znajomi", label: "Znajomi", time: "2 min" },
  { text: "Wyślij komuś krótkie „trzymam za Ciebie kciuki”.", category: "znajomi", label: "Znajomi", time: "1 min" },
  { text: "Powiedz komuś, że doceniasz jego wysiłek, nie tylko efekt.", category: "znajomi", label: "Znajomi", time: "2 min" },
  { text: "Zadzwoń do osoby z rodziny bez żadnej konkretnej sprawy.", category: "rodzina", label: "Rodzina", time: "5 min" },
  { text: "Zapytaj kogoś, jak możesz być dla niego lepszym wsparciem.", category: "znajomi", label: "Znajomi", time: "4 min" },
  { text: "Okaż cierpliwość komuś, kto dziś ma gorszy dzień.", category: "obcy", label: "Obcy", time: "1 min" },
  { text: "Napisz do kogoś po spotkaniu: „Fajnie było Cię zobaczyć”.", category: "znajomi", label: "Znajomi", time: "2 min" },
  { text: "Zapytaj bliską osobę, o czym marzy ostatnio najczęściej.", category: "rodzina", label: "Rodzina", time: "5 min" },
  { text: "Powiedz komuś, że jego wiadomość albo gest dużo dla Ciebie znaczył.", category: "znajomi", label: "Znajomi", time: "2 min" },
  { text: "Zaproś kogoś do krótkiej rozmowy zamiast kolejnej wymiany memów.", category: "znajomi", label: "Znajomi", time: "5 min" },
  { text: "Daj komuś przestrzeń, żeby powiedział coś do końca.", category: "ja", label: "Uważność", time: "2 min" },
  { text: "Wybierz jedną osobę i zrób dziś coś, dzięki czemu poczuje się ważna.", category: "znajomi", label: "Znajomi", time: "5 min" },
  { text: "Powiedz sobie dzisiaj, za co siebie kochasz.", category: "ja", label: "Uważność", time: "2 min" },
];

const taskText = document.querySelector("#taskText");
const taskCategory = document.querySelector("#taskCategory");
const taskTime = document.querySelector("#taskTime");
const drawTaskButton = document.querySelector("#drawTask");
const completeTaskButton = document.querySelector("#completeTask");
const chips = document.querySelectorAll(".chip");

let activeFilter = "all";
let currentTask = null;
let completed = Number(localStorage.getItem("bondalyDone") || 0);

function availableTasks() {
  return activeFilter === "all" ? tasks : tasks.filter((task) => task.category === activeFilter);
}

function drawTask() {
  const pool = availableTasks();
  let nextTask = pool[Math.floor(Math.random() * pool.length)];

  if (pool.length > 1) {
    while (nextTask === currentTask) {
      nextTask = pool[Math.floor(Math.random() * pool.length)];
    }
  }

  currentTask = nextTask;
  taskText.textContent = nextTask.text;
  taskCategory.textContent = nextTask.label;
  taskTime.textContent = nextTask.time;
}

function completeTask() {
  completed += 1;
  localStorage.setItem("bondalyDone", completed);
  completeTaskButton.animate(
    [
      { transform: "scale(1)" },
      { transform: "scale(1.04)" },
      { transform: "scale(1)" },
    ],
    { duration: 260, easing: "ease-out" }
  );
  drawTask();
}

chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    chips.forEach((item) => item.classList.remove("active"));
    chip.classList.add("active");
    activeFilter = chip.dataset.filter;
    drawTask();
  });
});

drawTaskButton.addEventListener("click", drawTask);
completeTaskButton.addEventListener("click", completeTask);

drawTask();
