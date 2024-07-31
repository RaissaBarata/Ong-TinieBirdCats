document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector(".navbar__toggle");
  const navbarLinks = document.querySelector(".navbar__links");

  toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("navbar__links--active");
    console.log("clicou");
  });
});

document.querySelectorAll(".content__slider-circle").forEach((circle) => {
  circle.addEventListener("click", function () {
    document
      .querySelectorAll(".content__slider-circle")
      .forEach((b) => b.classList.remove("select"));
    this.classList.add("select");
    console.log("Circle clicked");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const backgroundImages = [
    'url("/imagens/gato.png"), url("/imagens/background1.svg")',
    'url("/imagens/maingato2.png"), url("/imagens/background2.svg")',
    'url("/imagens/maingato3.png"), url("/imagens/background3.svg")',
  ];

  const circles = document.querySelectorAll(".content__slider-circle");
  circles.forEach((circle, index) => {
    circle.addEventListener("click", function () {
      document
        .querySelectorAll(".content__slider-circle")
        .forEach((b) => b.classList.remove("select"));
      this.classList.add("select");
      document.querySelector("main").style.backgroundImage =
        backgroundImages[index];
    });
  });
});

document.querySelectorAll(".faq__container-item-question").forEach((button) => {
  button.addEventListener("click", () => {
    const faqItem = button.parentElement;
    const answer = faqItem.querySelector(".faq__container-item-answer");

    button.style.display = "none";

    answer.style.display = "flex";
  });
});

document.querySelectorAll(".faq__container-item-answer").forEach((answer) => {
  answer.addEventListener("click", () => {
    const faqItem = answer.parentElement;
    const button = faqItem.querySelector(".faq__container-item-question");

    answer.style.display = "none";

    button.style.display = "flex";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const sliderLeft = document.getElementById("slider-left");
  const sliderRight = document.getElementById("slider-right");
  const sliderCards = document.getElementById("slider-cards");
  const cards = document.querySelectorAll(".testimonials__slider-cards-card");
  const cardWidth = cards[0].offsetWidth;
  const totalCards = cards.length;
  let index = 0;

  function updateSlider() {
    sliderCards.style.transform = `translateX(-${index * cardWidth}px)`;
    cards.forEach((card, i) => {
      if (i >= index && i < index + 2) {
        card.classList.add("active");
        card.classList.remove("inactive");
      } else {
        card.classList.add("inactive");
        card.classList.remove("active");
      }
    });
  }

  sliderLeft.addEventListener("click", () => {
    index = Math.max(0, index - 1);
    updateSlider();
  });

  sliderRight.addEventListener("click", () => {
    index = Math.min(totalCards - 2, index + 1);
    updateSlider();
  });

  updateSlider();
});

document
  .querySelector(".contact__form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    clearErrorMessages();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    if (name.trim() === "") {
      showError(
        "nameError",
        "*O preenchimento do campo <b>Nome</b> é obrigatório."
      );
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/;
    if (!emailPattern.test(email)) {
      showError("emailError", "Por favor, insira um <b>e-mail</b> válido.");
    }

    const phonePattern = /^\d{10,11}$/;
    if (!phonePattern.test(phone)) {
      showError("phoneError", "Por favor, insira um <b>celular</b> válido.");
    }

    if (message.trim() === "") {
      showError(
        "messageError",
        "*O preenchimento do campo <b>Mensagem</b> é obrigatório."
      );
    }
  });

function clearErrorMessages() {
  const errorFields = ["nameError", "emailError", "phoneError", "messageError"];
  errorFields.forEach(function (field) {
    document.getElementById(field).textContent = "";
    document.getElementById(field).style.display = "none";
  });
}

function showError(elementId, message) {
  const errorElement = document.getElementById(elementId);
  errorElement.style.display = "block";
  errorElement.innerHTML = message;
}

let mybutton = document.getElementById("scrollToTopBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
  let documentHeight =
    document.documentElement.scrollHeight || document.body.scrollHeight;
  let windowHeight =
    window.innerHeight || document.documentElement.clientHeight;

  if (scrollTop + windowHeight >= documentHeight - 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function animateNumber(element, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    element.textContent = "+" + Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function onScroll() {
  const targets = document.querySelectorAll(".support__map-item span");
  targets.forEach((target) => {
    if (isElementInViewport(target) && !target.classList.contains("animated")) {
      const endValue = parseInt(target.textContent.replace(/[^\d]/g, ""), 10);
      animateNumber(target, 0, endValue, 2000);
      target.classList.add("animated");
    }
  });
}

window.addEventListener("scroll", onScroll);
window.addEventListener("load", onScroll);
