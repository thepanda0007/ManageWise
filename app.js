const q1 = document.getElementById("q1");
const q2 = document.getElementById("q2");
const q3 = document.getElementById("q3");
const q4 = document.getElementById("q4");
const q5 = document.getElementById("q5");

const a1 = document.getElementById("a1");
const a2 = document.getElementById("a2");
const a3 = document.getElementById("a3");
const a4 = document.getElementById("a4");
const a5 = document.getElementById("a5");

const picon1 = document.getElementById("q1icon1");
const xicon1 = document.getElementById("q1icon2");

q1.onclick = function () {
  a1.classList.toggle("hide");
  picon1.classList.toggle("hide");
  xicon1.classList.toggle("hide");
  if (!a1.classList.contains("hide")) {
    q1.classList.add("purple");
  } else {
    q1.classList.remove("purple");
  }
};

const picon2 = document.getElementById("q2icon1");
const xicon2 = document.getElementById("q2icon2");

q2.onclick = function () {
  a2.classList.toggle("hide");
  picon2.classList.toggle("hide");
  xicon2.classList.toggle("hide");
  if (!a2.classList.contains("hide")) {
    q2.classList.add("purple");
  } else {
    q2.classList.remove("purple");
  }
};

const picon3 = document.getElementById("q3icon1");
const xicon3 = document.getElementById("q3icon2");

q3.onclick = function () {
  a3.classList.toggle("hide");
  picon3.classList.toggle("hide");
  xicon3.classList.toggle("hide");
  if (!a3.classList.contains("hide")) {
    q3.classList.add("purple");
  } else {
    q3.classList.remove("purple");
  }
};

const picon4 = document.getElementById("q4icon1");
const xicon4 = document.getElementById("q4icon2");

q4.onclick = function () {
  a4.classList.toggle("hide");
  picon4.classList.toggle("hide");
  xicon4.classList.toggle("hide");
  if (!a4.classList.contains("hide")) {
    q4.classList.add("purple");
  } else {
    q4.classList.remove("purple");
  }
};

const picon5 = document.getElementById("q5icon1");
const xicon5 = document.getElementById("q5icon2");

q5.onclick = function () {
  a5.classList.toggle("hide");
  picon5.classList.toggle("hide");
  xicon5.classList.toggle("hide");
  if (!a5.classList.contains("hide")) {
    q5.classList.add("purple");
  } else {
    q5.classList.remove("purple");
  }
};

const burgerMenu = document.getElementById("burgerMenu");
const mobileNav = document.getElementById("mobileNav");
const closeBurgerMenu = document.getElementById("closeBurgerMenu");
const logo = document.getElementById("logo");
burgerMenu.onclick = function () {
  mobileNav.classList.toggle("hide");
  logo.classList.add("hide");
  burgerMenu.classList.add("hide");
};
closeBurgerMenu.onclick = function () {
  mobileNav.classList.toggle("hide");
  logo.classList.remove("hide");
  burgerMenu.classList.remove("hide");
};
