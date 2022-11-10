import data from "./data.json";

export async function fetchFilms() {
  const response = await fetch("https://swapi.dev/api/films/");
  const films = await response.json();
  const episodes = films.results;

  return episodes;
}

export async function fetchDetails(id, category) {
  const response = await fetch(`https://swapi.dev/api/films/${id}`);
  const film = await response.json();
  const requests = film[category].map((url) => fetch(url));
  const responses = await Promise.all(requests);
  const data = await Promise.all(responses.map((response) => response.json()));
  data["crawl"] = film.opening_crawl;
  return data;
}

export async function fetchPageDetails(id) {
  const response = await fetch(`https://swapi.dev/api/films/${id}`);
  const pageDetails = await response.json();
  const requests = data.categories.map((category) => {
    const categoryRequests = pageDetails[category].map((url) => fetch(url));
    return categoryRequests;
  });
  const relatedData = {};
  // for (let i = 0; i < requests.length; i++) {
  //   const categoryRequests = requests[i];
  //   const categoryName = data.categories[i];
  //   const categoryResponses = await Promise.all(categoryRequests);
  //   const categoryData = await Promise.all(
  //     categoryResponses.map((response) => response.json())
  //   );
  //   relatedData[categoryName] = categoryData;
  // }
  return { ...pageDetails, ...relatedData };
}
