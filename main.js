const page = document.querySelector(".page");
const modal_btn = document.querySelector('.modal_btn');
const modal_close_btn = document.querySelector('.modal_close_btn');
const modal = document.querySelector('.modal');

modal_btn.addEventListener("click", () => {
  modal.classList.toggle("invisible");
});

modal_close_btn.addEventListener("click", () => {
  modal.classList.toggle("invisible");
});