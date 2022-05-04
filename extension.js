const albums = [
  {
    title: "In Rainbows",
    artist: "Radiohead",
    releaseDate: 2007,
    imgSrc:
      "https://media.pitchfork.com/photos/5929b2fe9d034d5c69bf4c59/1:1/w_600/7055fb4d.jpg",
    rating: 9.3,
    genres: ["Alternative", "Electronica"],
  },

  {
    title: "Magma",
    artist: "Gojira",
    releaseDate: 2016,
    imgSrc:
      "https://media.pitchfork.com/photos/5929b6469d034d5c69bf518d/1:1/w_320,c_limit/730a379d.jpg",
    rating: 7.6,
    genres: ["Jazz", "Metal"],
  },

  {
    title: "Brand New Secondhand",
    artist: "Roots Manuva",
    releaseDate: 1999,
    imgSrc:
      "https://media.pitchfork.com/photos/5929c3a7c0084474cd0c3506/1:1/w_320,c_limit/c23e052b.gif",
    rating: 9.5,
    genres: ["Electronic", "Jazz", "Rap"],
  },
];

const getAlbumHtml = (album) => {
  return `<div class="card">
			<div class="card__header-section">
				<img
					class="card__image"
					src="${album.imgSrc}"
				/>
				<div class="card__rating">${album.rating}</div>
			</div>
			<div class="card__content">
				<h2 class="card__heading">${album.title}</h2>
				<div class="card__description">
					<p class="card__description-text">${album.artist}</p>
					<p class="card__description-text">${album.releaseDate}</p>
				</div>
				<hr class="card__line" />
				<p class="card__genres">Genres:</p>
				<p class="card__genre-values">${album.genres.join(", ")}<p>
			</div>
		</div>`;
};

const container = document.querySelector(".card-container");

albums.forEach((album) => {
  container.innerHTML += getAlbumHtml(album);
});
