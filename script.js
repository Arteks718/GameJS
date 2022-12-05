const $btnThunder = document.getElementById("btn-kick-thunder");
const $btnShock = document.getElementById("btn-kick-shock");

const character = {
  name: "Pikachu",
  defaultHP: 100,
  damageHP: 100,
  elHP: document.getElementById("health-character"),
  elProgressbar: document.getElementById("progressbar-character"),
};

const enemyCharmander = {
  name: "Charmander",
  defaultHP: 100,
  damageHP: 100,
  elHP: document.getElementById("health-enemy-charmander"),
  elProgressbar: document.getElementById("progressbar-enemy-charmander"),
};

const enemyBulbasaur = {
  name: "Bulbasaur",
  defaultHP: 100,
  damageHP: 100,
  elHP: document.getElementById("health-enemy-bulbasaur"),
  elProgressbar: document.getElementById("progressbar-enemy-bulbasaur"),
};

$btnThunder.addEventListener("click", function () {
  console.log("Kick");
  kick(20);
});

$btnShock.addEventListener("click", function () {
  console.log("Kick");
  kick(15);
});

function init() {
  console.log("Start game");
  renderHP(character);
  renderHP(enemyCharmander);
  renderHP(enemyBulbasaur);
}

function renderHP(person) {
  renderHPLife(person);
  renderProgressbarHP(person);
}

function renderHPLife(person) {
  person.elHP.innerText = person.damageHP + " / " + person.defaultHP;
}

function renderProgressbarHP(person) {
  person.elProgressbar.style.width = person.damageHP + "%";
}

function changeHP(count, person) {
  if (person.damageHP < count) {
    person.damageHP = 0;
    alert("Бедный " + person.name + " проиграл бой!");
    $btnThunder.disabled = true;
  } else {
    person.damageHP -= count;
  }
  renderHP(person);
}

function kick(num) {
  changeHP(random(num), character);
  changeHP(random(num), enemyCharmander);
  changeHP(random(num), enemyBulbasaur);
}

function random(num) {
  return Math.ceil(Math.random() * num);
}

init();
