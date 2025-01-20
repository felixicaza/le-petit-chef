document.addEventListener("DOMContentLoaded", function () {
  // select menú
  const counters = document.querySelectorAll(".counter");

  counters.forEach((counter) => {
    const minusButton = counter.querySelector(".btn-minus");
    const plusButton = counter.querySelector(".btn-plus");
    const input = counter.querySelector("input");

    minusButton.addEventListener("click", () => {
      let value = parseInt(input.value);
      if (value > 0) {
        input.value = value - 1;
      }
    });

    plusButton.addEventListener("click", () => {
      let value = parseInt(input.value);
      input.value = value + 1;
    });
  });

  // checkout
  const timeSlots = document.querySelectorAll(".time-slot");

  timeSlots.forEach((slot) => {
    slot.addEventListener("click", function () {
      // Deselect other slots
      timeSlots.forEach((slot) => slot.classList.remove("selected"));

      // Select current slot
      this.classList.add("selected");
      console.log(`Selected time: ${this.textContent.trim()}`);
    });
  });

  //
  const selectElement = document.getElementById("mySelect");
  const guestsContainer = document.querySelector(".guests");

  if (selectElement && guestsContainer) {
    // Detectar cuando el select se abre (focus) y se cierra (blur)
    selectElement.addEventListener("focus", () => {
      guestsContainer.classList.add("open");
    });

    selectElement.addEventListener("blur", () => {
      guestsContainer.classList.remove("open");
    });
  }

  // Selecciona el elemento .footer-nav
  const footerNav = document.querySelector(".footer-nav");

  // Verifica si tiene un solo hijo
  if (footerNav && footerNav.children.length === 1) {
    footerNav.classList.add("one-btn");
  }

  document.querySelectorAll(".btn-what-includes").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault(); // Evita el comportamiento por defecto del enlace

      // Encuentra el `.submenu-item` más próximo al botón
      const submenu = button.closest(".menu-item").nextElementSibling;

      // Alterna la clase 'active' para mostrar u ocultar el `.submenu-item`
      submenu.classList.toggle("active");
    });
  });
});

const isMobile = navigator.userAgent.match(/Android|iPhone|iPad/i);

if (isMobile) {
  const $calendarDays = document.querySelector(".calendar-days");
  const $dialog = document.querySelector("dialog");
  const $closeDialog = document.querySelector(".close-dialog");

  const DAYS_FREE_SELECTOR = "calendar-days-free";
  const DAYS_FEWSEATS_SELECTOR = "calendar-days-fewseats";

  $calendarDays?.addEventListener("click", ({target}) => {
    if (target.classList.contains(DAYS_FREE_SELECTOR) || target.classList.contains(DAYS_FEWSEATS_SELECTOR)) {
      $dialog.showModal();
    }
  })

  $closeDialog?.addEventListener("click", () => {
    $dialog.close();
  })
}
