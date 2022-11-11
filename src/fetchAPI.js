export async function fetchFilms() {
  const response = await fetch("https://swapi.dev/api/films/");
  const films = await response.json();
  const episodes = films.results;

  return episodes;
}

export async function fetchCategory(filmId, category) {
  const response = await fetch(`https://swapi.dev/api/films/${filmId}`);
  const film = await response.json();
  const requests = film[category].map((url) => fetch(url));
  const responses = await Promise.all(requests);
  const data = await Promise.all(responses.map((response) => response.json()));

  return data;
}

export async function fetchPageDetails(id) {
  const response = await fetch(`https://swapi.dev/api/films/${id}`);
  const pageDetails = await response.json();

  return pageDetails;
}
