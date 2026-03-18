window.addEventListener("load", function () { /* si la page est reload */
  const container = document.querySelector(".container-all");
  if (!container) return; /* si le container n'existe pas */

  let items = Array.from(container.children); /* récupère tous les enfants du container */

  for (let i = items.length - 1; i > 0; i--) { /* boucle pour mélanger les éléments */
    let j = Math.floor(Math.random() * (i + 1)); /* génère un index aléatoire */
    [items[i], items[j]] = [items[j], items[i]]; /* échange les éléments */
  }

  const frag = document.createDocumentFragment(); /* crée un fragment de document */
  items.forEach(el => frag.appendChild(el)); /* ajoute chaque élément au fragment */
  container.innerHTML = ""; /* vide le container */
  container.appendChild(frag); /* ajoute le fragment au container */

});