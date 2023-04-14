let deg = 6;
let _hr = document.querySelector("#hr");
let _mn = document.querySelector("#mn");
let _sc = document.querySelector("#sc");

setInterval(() => {
  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * deg;
  let ss = day.getSeconds() * deg;
  _hr.style.transform = `rotatez(${hh + mm / 12}deg)`;
  _mn.style.transform = `rotatez(${mm}deg)`;
  _sc.style.transform = `rotatez(${ss}deg)`;
}),
  1000;
