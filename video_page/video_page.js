// --- Liste des vidéos (ajouter / modifier ici) ---
// Utilisez l'ID YouTube pour la propriété `youtubeId`.
const videos = [
  {
    id: 1,
    title: "Me at the zoo",
    category: "1",
    youtubeId: "jNQXAC9IVRw",
    thumbColor: "#ff6b6b",
  },
  {
    id: 2,
    title: "Franklin la tortue",
    category: "1",
    youtubeId: "7BuNVODCmE4",
    thumbColor: "#6b6bff",
  },
  {
    id: 3,
    title: "Ether",
    category: "2",
    youtubeId: "qTBIdYZLtuk",
    thumbColor: "#6bff9e",
  },
  {
    id: 4,
    title: "Vidéo Squeezie",
    category: "2",
    youtubeId: "p61Xwch8f3I",
    thumbColor: "#ffd36b",
  },
  {
    id: 5,
    title: "Amixem",
    category: "3",
    youtubeId: "xX8iRavbXxE",
    thumbColor: "#b86bff",
  },
  {
    id: 6,
    title: "Wankil",
    category: "3",
    youtubeId: "lvj09izqePk",
    thumbColor: "#6bd1ff",
  },
];

// Labels affichés à l'écran pour chaque catégorie
const categoryLabels = {
  all: "Toutes",
  1: "Catégorie 1",
  2: "Catégorie 2",
  3: "Catégorie 3",
};

// Références vers les éléments HTML utilisés par le script
const slotsEl = document.getElementById("slots");
const categoryButtons = document.querySelectorAll(".cat");
const player = document.getElementById("player");
const videoTitle = document.getElementById("video-title");
const videoCategory = document.getElementById("video-category");

/**
 * Génère une image miniature SVG (data URI) pour chaque vidéo.
 * Cela évite d’avoir besoin de fichiers image séparés.
 */
function makeThumbSVG(color, title) {
  const svg = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='320' height='180'><rect width='100%' height='100%' fill='${encodeURIComponent(
    color,
  )}'/><text x='50%' y='50%' font-size='20' font-family='Arial' fill='white' dominant-baseline='middle' text-anchor='middle'>${encodeURIComponent(
    title,
  )}</text></svg>`;
  return svg;
}

/**
 * Affiche les vignettes de vidéo (slots) selon la catégorie sélectionnée.
 * @param {string} filter - Nom de la catégorie à afficher (ex: "all", "Rose")
 */
function renderSlots(filter = "all") {
  // réinitialise le conteneur
  slotsEl.innerHTML = "";

  // filtre les vidéos à afficher
  const filtered = videos.filter((v) =>
    filter === "all" ? true : v.category === filter,
  );

  // crée un bouton pour chaque vidéo filtrée
  filtered.forEach((v) => {
    const slot = document.createElement("button");
    slot.className = "slot";
    slot.type = "button";
    slot.setAttribute("data-id", v.id);

    slot.innerHTML = `
      <div class='thumb' style="background-image:url('${makeThumbSVG(
        v.thumbColor,
        v.title,
      )}')"></div>
      <p class='title'>${v.title}</p>
      <button class='cat' aria-hidden='true'>${v.category}</button>
    `;

    // clique sur la vignette : charge la vidéo dans l'iframe
    slot.addEventListener("click", () => loadVideo(v));

    slotsEl.appendChild(slot);
  });
}

/**
 * Charge une vidéo dans l'iframe et met à jour le titre / catégorie affichés.
 * @param {Object} video - Objet vidéo extrait de la liste `videos`
 */
function loadVideo(video) {
  if (!video) return;

  // met à jour l'URL de l'iframe YouTube
  player.src = `https://www.youtube.com/embed/${video.youtubeId}?autoplay=0&controls=1`;

  // met à jour les labels texte
  videoTitle.textContent = video.title;
  videoCategory.textContent = categoryLabels[video.category] || video.category;
}

// Ajoute le comportement aux boutons de filtre de catégorie
categoryButtons.forEach((btn) =>
  btn.addEventListener("click", () => {
    // active visuellement le bouton sélectionné
    categoryButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const cat = btn.getAttribute("data-cat");
    renderSlots(cat);
  }),
);

// Initialisation : affichage de la liste + chargement de la première vidéo
document.addEventListener("DOMContentLoaded", () => {
  renderSlots("all");
  // charge la première vidéo dans le player
  loadVideo(videos[0]);
});
