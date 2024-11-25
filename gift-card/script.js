// Gift elements
const giftContainer = document.querySelector(".desktop .gift-container");
const giftCards = document.querySelector(".desktop .gift-cards");

// Step elements
const stepOne = document.querySelector(".desktop .step-one");
const stepTwo = document.querySelector(".desktop .step-two");
const stepThree = document.querySelector(".desktop .step-three");
const stepFour = document.querySelector(".desktop .step-four");
const stepFive = document.querySelector(".desktop .step-five");

// Delivery elements
const deliveryContainer = document.querySelector(
  ".desktop .delivery-container"
);
const deliveryBackButton = document.querySelector(".desktop .delivery-back");
const deliveryButtons = document.querySelectorAll(".desktop .delivery");

// Amount elements
const amount = document.querySelector(".desktop .amount");
const amoutnBackButton = document.querySelector(".desktop .amount-back");
const priceButtons = document.querySelector(".desktop .default-amounts");

// Card 3D elements
const card3D = document.querySelector(".desktop .card-3d");
const card3DBackButton = document.querySelector(".desktop .card-3d-back");
const card3DButtons = document.querySelector(".desktop .card-3d-container");

// Toy elements
const toyContainer = document.querySelector(".desktop .toy");
const toyBackButton = document.querySelector(".desktop .toy-back");
const toyButtons = document.querySelector(".desktop .toy-buttons");

// Gift elements logic
giftCards.addEventListener("click", (event) => {
  const clickedCard = event.target.closest(".gift");

  if (!clickedCard) return;

  const activeCard = giftCards.querySelector(".gift.active");

  if (activeCard) {
    activeCard.classList.remove("active");
  }

  clickedCard.classList.add("active");
  stepOne.classList.add("active");
  stepTwo.classList.add("marked");
  deliveryContainer.classList.add("active");
  giftContainer.classList.add("hide");
});

// Delivery elements logic
deliveryBackButton.addEventListener("click", () => {
  stepOne.classList.remove("active");
  stepTwo.classList.remove("marked");
  giftContainer.classList.remove("hide");
  deliveryContainer.classList.remove("active");
});

deliveryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    deliveryButtons.forEach((button) => {
      button.classList.remove("active");
    });

    stepTwo.classList.replace("marked", "active");
    stepThree.classList.add("marked");
    stepFour.classList.remove("hide");
    stepFive.classList.remove("hide");
    button.classList.add("active");
    amount.classList.remove("hide");
    deliveryContainer.classList.remove("active");
  });
});

// Amount elements logic
amoutnBackButton.addEventListener("click", () => {
  stepTwo.classList.replace("active", "marked");
  stepThree.classList.remove("marked");
  stepFour.classList.add("hide");
  stepFive.classList.add("hide");
  amount.classList.add("hide");
  deliveryContainer.classList.add("active");
});

priceButtons.addEventListener("click", (event) => {
  const clickedCard = event.target.closest(".price");

  if (!clickedCard) return;

  const activeCard = priceButtons.querySelector(".price.active");

  if (activeCard) {
    activeCard.classList.remove("active");
  }

  stepThree.classList.replace("marked", "active");
  stepFour.classList.add("marked");
  clickedCard.classList.add("active");
  card3D.classList.remove("hide");
  amount.classList.add("hide");
});

// Card 3D elements logic
card3DBackButton.addEventListener("click", () => {
  stepThree.classList.replace("active", "marked");
  stepFour.classList.remove("marked");
  card3D.classList.add("hide");
  amount.classList.remove("hide");
});

card3DButtons.addEventListener("click", (event) => {
  const clickedCard = event.target.closest(".gift-3d");

  if (!clickedCard) return;

  const activeCard = card3DButtons.querySelector(".gift-3d.active");

  if (activeCard) {
    activeCard.classList.remove("active");
  }

  stepFour.classList.replace("marked", "active");
  clickedCard.classList.add("active");
  toyContainer.classList.remove("hide");
  card3D.classList.add("hide");
});

// Toy elements logic
toyBackButton.addEventListener("click", () => {
  stepFour.classList.replace("active", "marked");
  toyContainer.classList.add("hide");
  card3D.classList.remove("hide");
});

toyButtons.addEventListener("click", (event) => {
  const clickedCard = event.target.closest(".toy-gift");

  if (!clickedCard) return;

  const activeCard = toyButtons.querySelector(".toy-gift.active");

  if (activeCard) {
    activeCard.classList.remove("active");
  }

  clickedCard.classList.add("active");
});
