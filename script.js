const tasks = [
  { text: "Zadzwoń do dziadka albo babci i zapytaj, jak minął im dzień.", category: "rodzina", label: "Rodzina", time: "5 min" },
  { text: "Napisz „kocham cię” do osoby, z którą dawno nie miałaś kontaktu.", category: "rodzina", label: "Rodzina", time: "2 min" },
  { text: "Wyślij komuś wiadomość z jedną konkretną rzeczą, którą w nim cenisz.", category: "znajomi", label: "Znajomi", time: "3 min" },
  { text: "Powiedz coś miłego osobie, z którą zwykle rozmawiasz tylko przelotnie.", category: "obcy", label: "Obcy", time: "1 min" },
  { text: "Uśmiechnij się do obcej osoby, którą spotkasz dzisiaj po drodze.", category: "obcy", label: "Obcy", time: "30 sek" },
  { text: "Życz komuś miłego dnia tak, żeby naprawdę to usłyszał.", category: "obcy", label: "Obcy", time: "1 min" },
  { text: "Zaproś kogoś na krótką kawę, spacer albo rozmowę bez scrollowania.", category: "znajomi", label: "Znajomi", time: "10 min" },
  { text: "Odezwij się do osoby, za którą tęsknisz, nawet jednym prostym zdaniem.", category: "znajomi", label: "Znajomi", time: "2 min" },
  { text: "Podziękuj komuś za coś małego, co zwykle zostaje niezauważone.", category: "znajomi", label: "Znajomi", time: "2 min" },
  { text: "Zostaw telefon na 15 minut i daj pełną uwagę osobie obok.", category: "ja", label: "Uważność", time: "15 min" },
  { text: "Powiedz komuś bliskiemu: „dobrze, że jesteś”.", category: "rodzina", label: "Rodzina", time: "1 min" },
  { text: "Napisz krótką wiadomość do kogoś, kto ostatnio mógł czuć się samotnie.", category: "znajomi", label: "Znajomi", time: "4 min" },
  { text: "Wyślij stare zdjęcie komuś z rodziny i przypomnij miły moment.", category: "rodzina", label: "Rodzina", time: "3 min" },
  { text: "Zapytaj mamę, tatę albo opiekuna, czego dziś potrzebuje.", category: "rodzina", label: "Rodzina", time: "3 min" },
  { text: "Napisz do rodzeństwa jedną rzecz, za którą jesteś wdzięczna.", category: "rodzina", label: "Rodzina", time: "2 min" },
  { text: "Zaproponuj komuś bliskiemu pomoc w jednej małej sprawie.", category: "rodzina", label: "Rodzina", time: "5 min" },
  { text: "Zadzwoń do kogoś z rodziny bez konkretnego powodu.", category: "rodzina", label: "Rodzina", time: "5 min" },
  { text: "Powiedz komuś z domu komplement, którego dawno nie słyszał.", category: "rodzina", label: "Rodzina", time: "1 min" },
  { text: "Zrób herbatę, kawę albo wodę komuś bliskiemu bez pytania.", category: "rodzina", label: "Rodzina", time: "3 min" },
  { text: "Spytaj starszą osobę z rodziny o jedną historię z jej młodości.", category: "rodzina", label: "Rodzina", time: "10 min" },
  { text: "Wyślij znajomej wiadomość: „pomyślałam dziś o Tobie”.", category: "znajomi", label: "Znajomi", time: "1 min" },
  { text: "Skomentuj komuś szczerze coś dobrego, co ostatnio zrobił.", category: "znajomi", label: "Znajomi", time: "2 min" },
  { text: "Zaproponuj spotkanie osobie, z którą ciągle przekładacie plany.", category: "znajomi", label: "Znajomi", time: "3 min" },
  { text: "Wyślij komuś piosenkę, która Ci się z nim kojarzy.", category: "znajomi", label: "Znajomi", time: "2 min" },
  { text: "Zapytaj koleżankę albo kolegę, co ostatnio było dla nich trudne.", category: "znajomi", label: "Znajomi", time: "5 min" },
  { text: "Napisz do kogoś, kto kiedyś bardzo Ci pomógł, krótkie dziękuję.", category: "znajomi", label: "Znajomi", time: "4 min" },
  { text: "Wyślij komuś głosówkę zamiast zwykłej wiadomości.", category: "znajomi", label: "Znajomi", time: "2 min" },
  { text: "Przypomnij komuś wspólne wspomnienie, które dalej Cię cieszy.", category: "znajomi", label: "Znajomi", time: "3 min" },
  { text: "Napisz do osoby, której sukces ostatnio Cię ucieszył.", category: "znajomi", label: "Znajomi", time: "2 min" },
  { text: "Zaproś kogoś na 10-minutowy spacer bez żadnej presji.", category: "znajomi", label: "Znajomi", time: "10 min" },
  { text: "Przepuść kogoś w kolejce albo przy drzwiach i zrób to z uśmiechem.", category: "obcy", label: "Obcy", time: "1 min" },
  { text: "Podziękuj kasjerowi, kierowcy albo baristce trochę cieplej niż zwykle.", category: "obcy", label: "Obcy", time: "30 sek" },
  { text: "Powiedz komuś obcemu neutralny komplement, na przykład o stylu.", category: "obcy", label: "Obcy", time: "1 min" },
  { text: "Pomóż komuś z ciężkimi drzwiami, torbą albo upuszczoną rzeczą.", category: "obcy", label: "Obcy", time: "1 min" },
  { text: "Napisz miłą opinię miejscu, w którym ktoś dobrze Cię obsłużył.", category: "obcy", label: "Obcy", time: "4 min" },
  { text: "Zostaw komuś miejsce do spokojnego włączenia się do rozmowy.", category: "obcy", label: "Obcy", time: "2 min" },
  { text: "Powiedz „dzień dobry” osobie, którą często mijasz.", category: "obcy", label: "Obcy", time: "30 sek" },
  { text: "Zareaguj życzliwie, gdy ktoś popełni małą pomyłkę.", category: "obcy", label: "Obcy", time: "1 min" },
  { text: "Ustąp miejsca komuś, kto wygląda na zmęczonego.", category: "obcy", label: "Obcy", time: "1 min" },
  { text: "Zostaw krótką, miłą karteczkę w miejscu, gdzie ktoś ją znajdzie.", category: "obcy", label: "Obcy", time: "3 min" },
  { text: "Napisz do siebie trzy rzeczy, które dziś zrobiłaś dobrze.", category: "ja", label: "Uważność", time: "3 min" },
  { text: "Wyjdź na 5 minut bez telefonu i zauważ trzy osoby wokół siebie.", category: "ja", label: "Uważność", time: "5 min" },
  { text: "Zanim odpiszesz komuś bliskiemu, przeczytaj wiadomość drugi raz spokojnie.", category: "ja", label: "Uważność", time: "1 min" },
  { text: "Przeproś za jedną drobną rzecz, którą odkładałaś.", category: "ja", label: "Uważność", time: "3 min" },
  { text: "Daj komuś pełną minutę mówienia bez przerywania.", category: "ja", label: "Uważność", time: "1 min" },
  { text: "Odłóż jedną rozmowę na żywo wyżej niż powiadomienie.", category: "ja", label: "Uważność", time: "5 min" },
  { text: "Zapisz imię osoby, z którą chcesz odnowić kontakt w tym tygodniu.", category: "ja", label: "Uważność", time: "2 min" },
  { text: "Wybierz jedną relację, o którą chcesz zadbać dzisiaj bardziej.", category: "ja", label: "Uważność", time: "2 min" },
  { text: "Zrób pierwszy krok w rozmowie, którą długo odkładałaś.", category: "ja", label: "Uważność", time: "5 min" },
  { text: "Powiedz komuś szczerze, że cieszysz się z tej rozmowy.", category: "ja", label: "Uważność", time: "1 min" },
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
