// Elements
const elements = {
  // Gift elements
  giftContainer: document.querySelector(".gift-container"),
  giftCards: document.querySelector(".gift-cards"),

  // Step elements
  steps: {
    one: document.querySelector(".step-one"),
    two: document.querySelector(".step-two"),
    three: document.querySelector(".step-three"),
    four: document.querySelector(".step-four"),
    five: document.querySelector(".step-five"),
  },

  // Delivery elements
  delivery: {
    container: document.querySelector(".delivery-container"),
    backButton: document.querySelector(".delivery-back"),
    buttons: document.querySelectorAll(".delivery"),
  },

  // Amount elements
  amount: {
    container: document.querySelector(".amount"),
    backButton: document.querySelector(".amount-back"),
    buttons: document.querySelector(".default-amounts"),
  },

  // Card 3D elements
  card3D: {
    container: document.querySelector(".card-3d"),
    backButton: document.querySelector(".card-3d-back"),
    buttons: document.querySelector(".card-3d-container"),
  },

  // Toy elements
  toy: {
    container: document.querySelector(".toy"),
    backButton: document.querySelector(".toy-back"),
    buttons: document.querySelector(".toy-buttons"),
  },
};

const handleActiveSelection = (container, selector, clickedElement) => {
  const activeElement = container.querySelector(selector + ".active");
  if (activeElement) activeElement.classList.remove("active");
  if (clickedElement) clickedElement.classList.add("active");
};

// Gift logic
elements.giftCards.addEventListener("click", (event) => {
  const clickedCard = event.target.closest(".gift");
  if (!clickedCard) return;

  handleActiveSelection(elements.giftCards, ".gift", clickedCard);
  elements.steps.one.classList.add("active");
  elements.steps.two.classList.add("marked");
  elements.delivery.container.classList.add("active");
  elements.giftContainer.classList.add("hide");
});

// Delivery logic
elements.delivery.backButton.addEventListener("click", () => {
  elements.steps.one.classList.remove("active");
  elements.steps.two.classList.remove("marked");
  elements.giftContainer.classList.remove("hide");
  elements.delivery.container.classList.remove("active");
});

elements.delivery.buttons.forEach((button) => {
  button.addEventListener("click", () => {
    handleActiveSelection(elements.delivery.container, ".delivery", button);

    elements.steps.two.classList.replace("marked", "active");
    elements.steps.three.classList.add("marked");
    elements.steps.four.classList.remove("hide");
    elements.steps.five.classList.remove("hide");
    elements.amount.container.classList.remove("hide");
    elements.delivery.container.classList.remove("active");
  });
});

// Amount logic
elements.amount.backButton.addEventListener("click", () => {
  elements.steps.two.classList.replace("active", "marked");
  elements.steps.three.classList.remove("marked");
  elements.steps.four.classList.add("hide");
  elements.steps.five.classList.add("hide");
  elements.amount.container.classList.add("hide");
  elements.delivery.container.classList.add("active");
});

elements.amount.buttons.addEventListener("click", (event) => {
  const clickedCard = event.target.closest(".price");
  if (!clickedCard) return;

  handleActiveSelection(elements.amount.buttons, ".price", clickedCard);

  elements.steps.three.classList.replace("marked", "active");
  elements.steps.four.classList.add("marked");
  elements.card3D.container.classList.remove("hide");
  elements.amount.container.classList.add("hide");
});

// Card 3D logic
elements.card3D.backButton.addEventListener("click", () => {
  elements.steps.three.classList.replace("active", "marked");
  elements.steps.four.classList.remove("marked");
  elements.card3D.container.classList.add("hide");
  elements.amount.container.classList.remove("hide");
});

elements.card3D.buttons.addEventListener("click", (event) => {
  const clickedCard = event.target.closest(".gift-3d");
  if (!clickedCard) return;

  handleActiveSelection(elements.card3D.buttons, ".gift-3d", clickedCard);

  elements.steps.four.classList.replace("marked", "active");
  elements.toy.container.classList.remove("hide");
  elements.card3D.container.classList.add("hide");
});

// Toy logic
elements.toy.backButton.addEventListener("click", () => {
  elements.steps.four.classList.replace("active", "marked");
  elements.toy.container.classList.add("hide");
  elements.card3D.container.classList.remove("hide");
});

elements.toy.buttons.addEventListener("click", (event) => {
  const clickedCard = event.target.closest(".toy-gift");
  if (!clickedCard) return;

  handleActiveSelection(elements.toy.buttons, ".toy-gift", clickedCard);
});
