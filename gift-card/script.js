// Function to initialize logic for a given container
const initializeContainerLogic = (container) => {
  const elements = {
    // Gift elements
    giftContainer: container.querySelector(".gift-container"),
    giftCards: container.querySelector(".gift-cards"),

    // Step elements
    steps: {
      one: container.querySelector(".step-one"),
      two: container.querySelector(".step-two"),
      three: container.querySelector(".step-three"),
      four: container.querySelector(".step-four"),
      five: container.querySelector(".step-five"),
    },

    // Delivery elements
    delivery: {
      container: container.querySelector(".delivery-container"),
      backButton: container.querySelector(".delivery-back"),
      buttons: container.querySelectorAll(".delivery"),
    },

    // Amount elements
    amount: {
      container: container.querySelector(".amount"),
      backButton: container.querySelector(".amount-back"),
      buttons: container.querySelector(".default-amounts"),
    },

    // Card 3D elements
    card3D: {
      container: container.querySelector(".card-3d"),
      backButton: container.querySelector(".card-3d-back"),
      buttons: container.querySelector(".card-3d-container"),
    },

    // Toy elements
    toy: {
      container: container.querySelector(".toy"),
      backButton: container.querySelector(".toy-back"),
      buttons: container.querySelector(".toy-buttons"),
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
};

// Initialize logic for all containers
document.querySelectorAll(".steps-container").forEach((container) => {
  initializeContainerLogic(container);
});
