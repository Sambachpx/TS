const compteur = document.getElementById("#compteur");

let initialCount = 0;

const increment = (e: Event) => {
  e.preventDefault();
  initialCount++;

  const span = compteur?.querySelector("span");

  if (span) {
    span.innerText = initialCount.toString();
  }
};

compteur?.addEventListener("click", increment);
