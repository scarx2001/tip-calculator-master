const amount = document.querySelector(".amount");
const tipBtn = document.querySelectorAll(".tip");
const custom = document.querySelector(".custom");
const people = document.querySelector(".people");
const perPerson = document.querySelector(".tip-amount-value");
const total = document.querySelector(".total-value");
const amtErr = document.querySelector(".amt-error");
const pplErr = document.querySelector(".people-error");
const reset = document.querySelector(".reset");
rst();
let tip = 0,
  amt = 0,
  ppl = 1;

tipBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("selected")) {
      tip = 0;
      btn.classList.remove("selected");
      btn.classList.add("unselected");
    } else {
      tipBtn.forEach((e) => {
        e.classList.remove("selected");
      });
      tip = btn.value;
      btn.classList.remove("unselected");
      btn.classList.add("selected");
    }
    custom.value = "";
    calc();
  });
});
custom.addEventListener("input", () => {
  if (custom.value >= 0) {
    tipBtn.forEach((e) => {
      e.classList.remove("selected");
    });
    tip = custom.value;
    calc();
  }
});
