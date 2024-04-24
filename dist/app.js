"use strict";
const compteur = document.getElementById("#compteur");
let initialCount = 0;
const increment = (e) => {
    e.preventDefault();
    initialCount++;
    const span = compteur === null || compteur === void 0 ? void 0 : compteur.querySelector("span");
    if (span) {
        span.innerText = initialCount.toString();
    }
};
compteur === null || compteur === void 0 ? void 0 : compteur.addEventListener("click", increment);
