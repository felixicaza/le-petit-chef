const linkText = document.querySelector(".link-text");
const inputDiscount = document.querySelector(".link-text ~ input");

linkText.addEventListener("click", () => {
  inputDiscount.classList.add("show");
  inputDiscount.focus();
});
