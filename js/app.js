const API_KEY = "1da8b10f-7b4f-4acb-91fa-6899fc43ddc0";
const API_URL_POPULAR="https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1";


getMovies(API_URL_POPULAR);

async function getMovies(url) {
    const resp =await fetch(url,{
        headers: {
            "content-Type" : "aplication/json",
            "X-API-Key": API_KEY,
        }
    });
    const respData =await resp.json();
   showMovies(respData);
}

function showMovies(data){
    const moviesEl = document.querySelector(".movies");

    data.films.forEach(movie => {
        const movieEl =document.createElement("div");
        movieEl.classList.add("movie");
        movieEl.innerHTML = `
        <div class="movie_cover-inner">
                    <img src="${movie.posterUrlPreview}" 
                    class="movie_cover"
                    alt="${movie.nameRu}"
                    />
                    <div class="movie_cover--darkened">
                    </div>
                </div>
                <div class="movie_info">
                    <div class="movie_title">${movie.nameRu}</div>
                    <div class="movie_category">${movie.genres.map(
                        (genre) => `${genre.genre}`
                    )}</div>
                    <div class="movie_avarage movie_avarage--green">${movie.rating}</div>
                </div> 
        `;
        moviesEl.appendChild(movieEl);
    });
}