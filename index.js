import anime from "./_snowpack/pkg/animejs.js";
const svg = document.querySelector("svg");
const p1 = anime.path("svg .p1");
const p2 = anime.path("svg .p2");
const p3 = anime.path("svg .p3");
const p4 = anime.path("svg .p4");
const p5 = anime.path("svg .p5");
const p6 = anime.path("svg .p6");
const p7 = anime.path("svg .p7");
const easing = "linear";
const duration = 5000;
const loop = true;
const d1 = anime.timeline({
  easing,
  duration,
  loop,
});
const d2 = anime.timeline({
  easing,
  duration,
  loop,
});
const d3 = anime.timeline({
  easing,
  duration,
  loop,
});
const d4 = anime.timeline({
  easing,
  duration,
  loop,
});
const d5 = anime.timeline({
  easing,
  duration,
  loop,
});
const d6 = anime.timeline({
  easing,
  duration,
  loop,
});
const d7 = anime.timeline({
  easing,
  duration,
  loop,
});
var keyframes = [
  { fill: "#00FFFF" },
  { fill: "#00FFFF" },
  { fill: "#00FFFF" },
  { fill: "rgb(240, 29, 29)", filter: "drop-shadow(0 0 3px red)" },
  { fill: "rgb(240, 29, 29)", filter: "drop-shadow(0 0 3px red)" },
  { fill: "rgb(240, 29, 29)", filter: "drop-shadow(0 0 3px red)" },
];
d1.add({
  targets: "svg .c",
  translateX: p1("x"),
  translateY: p1("y"),
  keyframes,
});
d2.add({
  targets: "svg .c2",
  translateX: p2("x"),
  translateY: p2("y"),
  direction: "both",
  keyframes,
  delay: 100,
});
d3.add({
  targets: "svg .c3",
  translateX: p3("x"),
  translateY: p3("y"),
  direction: "both",
  keyframes,
  delay: 300,
});
d4.add({
  targets: "svg .c4",
  translateX: p4("x"),
  translateY: p4("y"),
  direction: "both",
  keyframes,
  delay: 100,
});
d5.add({
  targets: "svg .c5",
  translateX: p5("x"),
  translateY: p5("y"),
  direction: "both",
  keyframes,
  delay: 100,
});
d6.add({
  targets: "svg .c6",
  translateX: p6("x"),
  translateY: p6("y"),
  direction: "both",
  keyframes,
  delay: 100,
});
d7.add({
  targets: "svg .c7",
  translateX: p7("x"),
  translateY: p7("y"),
  direction: "both",
  keyframes,
  delay: 160,
});
