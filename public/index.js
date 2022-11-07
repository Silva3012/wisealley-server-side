"use strict";

// Selecting DOM elements
const modal = document.querySelector(".modal-question");
const overlay = document.querySelector(".overlay");
// const showModal = document.querySelector(".show-modal");
const btnCloseModal = document.querySelector(".close-modal");
// Blocks/Buttons
const button1 = document.getElementById("btn1");
const button2 = document.getElementById("btn2");
const button3 = document.getElementById("btn3");
const button4 = document.getElementById("btn4");
const button5 = document.getElementById("btn5");
const button6 = document.getElementById("btn6");
const button7 = document.getElementById("btn7");
const button8 = document.getElementById("btn8");
const button9 = document.getElementById("btn9");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// Event handling
// for (let i = 0; i < showModal.length; i++) {
// showModal.addEventListener("click", openModal);
button1.addEventListener("click", openModal);
button2.addEventListener("click", openModal);
button3.addEventListener("click", openModal);
button4.addEventListener("click", openModal);
button5.addEventListener("click", openModal);
button6.addEventListener("click", openModal);
button7.addEventListener("click", openModal);
button8.addEventListener("click", openModal);
button9.addEventListener("click", openModal);

// }
btnCloseModal.addEventListener("click", closeModal);
