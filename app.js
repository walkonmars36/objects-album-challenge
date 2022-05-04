const inRainbows = {
  title: "In Rainbows",
  artist: "Radiohead",
  releaseDate: 2007,
  imgSrc:
    "https://media.pitchfork.com/photos/5929b2fe9d034d5c69bf4c59/1:1/w_600/7055fb4d.jpg",
  rating: 9.3,
  genres: ["Alternative", "Electronica"],
};

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
container.innerHTML = getAlbumHtml(inRainbows);
