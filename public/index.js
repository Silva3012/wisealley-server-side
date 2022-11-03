"use strict";

// Selecting DOM elements
const modal = document.querySelector(".modal-question");
const overlay = document.querySelector(".overlay");
const showModal = document.querySelectorAll(".show-modal");
const btnCloseModal = document.querySelector(".close-modal");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// Event handling
for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener("click", openModal);
}
btnCloseModal.addEventListener("click", closeModal);
