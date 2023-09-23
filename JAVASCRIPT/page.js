let prosjekterBtn = document.getElementById("prosjekterBtn");
let kontaktBtn = document.getElementById("kontaktBtn");

function scrollToCards() {
  mainWrapper.scrollIntoView({
    block: "start",
    behavior: "smooth",
    inline: "start",
  });
} 

// prosjekterBtn.addEventListener("click", scrollToCards);
// kontaktBtn.addEventListener("click", scrollToCards);