/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = [
    "Mi novia",
    "Un cocodrilo",
    "Una boa",
    "Mi hermano",
    "Mi prima",
    "Un tiburón",
    "Un oso",
    "Un luchador de la UFC"
  ];
  let what = [
    "se comió",
    "rompió",
    "pisó",
    "reventó",
    "se tragó",
    "lanzó",
    "mordió",
    "estrujó"
  ];
  let when = [
    "ayer",
    "anteayer",
    "ahora mismo",
    "hace nada",
    "hace unos minutos",
    "la semana pasada",
    "hace unos días",
    "el mes pasado"
  ];
  let mientras = [
    "dormía.",
    "cocinaba.",
    "estaba al baño.",
    "sacaba la basura.",
    "hacía yoga.",
    "merendaba.",
    "desayunaba.",
    "me duchaba."
  ];
  function randomizar() {
    let randomNumber1 = Math.floor(Math.random() * 8);
    let randomNumber2 = Math.floor(Math.random() * 8);
    let randomNumber3 = Math.floor(Math.random() * 8);
    let randomNumber4 = Math.floor(Math.random() * 8);
    return `${who[randomNumber1]} ${what[randomNumber2]} mi portátil ${when[randomNumber3]} mientras ${mientras[randomNumber4]}`;
  }
  function dameTexto() {
    let excusas = randomizar();
    let elemento = document.getElementById("excusa");
    elemento.innerHTML = excusas;
  }
  dameTexto();
};
