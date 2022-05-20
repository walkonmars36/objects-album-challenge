const cardContainer = document.querySelector(".card-container");

// const album = {
//   artist: "Radiohead",
//   title: "In Rainbows",
//   artwork: (src = "https://media.pitchfork.com/photos/5929b2fe9d034d5c69bf4c59/1:1/w_600/7055fb4d.jpg"),
//   year: "2007",
//   genre: "Alternative, Electronica",
//   rating: "10",
// };

const albums = [
  {
    artist: "Radiohead",
    title: "In Rainbows",
    artwork: (src = "https://media.pitchfork.com/photos/5929b2fe9d034d5c69bf4c59/1:1/w_600/7055fb4d.jpg"),
    year: "2007",
    genre: "Alternative, Electronica",
    rating: "10",
  },
  {
    artist: "Radiohead",
    title: "In Rainbows",
    artwork: (src = "https://media.pitchfork.com/photos/5929b2fe9d034d5c69bf4c59/1:1/w_600/7055fb4d.jpg"),
    year: "2007",
    genre: "Alternative, Electronica",
    rating: "10",
  },
  {
    artist: "Radiohead",
    title: "In Rainbows",
    artwork: (src = "https://media.pitchfork.com/photos/5929b2fe9d034d5c69bf4c59/1:1/w_600/7055fb4d.jpg"),
    year: "2007",
    genre: "Alternative, Electronica",
    rating: "10",
  },
];

const createCardHTML = (album) => {
  return `
    <div class="card"> 
    
    <div class="card__header-section">
    <img class="card__image" src=${album.artwork} />
    <div class="card__rating">${album.rating}</div>
  </div>
  <div class="card__content">
    <h2 class="card__heading">${album.title}</h2>
    <div class="card__description">
      <p class="card__description-text">${album.artist}</p>
      <p class="card__description-text">${album.year}</p>
    </div>
    <hr class="card__line" />
    <p class="card__genres">Genres:</p>
    <p class="card__genre-values">${album.genre}</p>
  </div>
    
    </div>
    `;
};

albums.forEach((album) => (cardContainer.innerHTML += createCardHTML(album)));
