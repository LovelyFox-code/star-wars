import Box from "../components/Box/Box";
import Section from "../components/Section/Section";
import TextContainer from "../components/Text-container/TextContainer";
import {
  IoIosPeople,
  IoIosPlanet,
  IoIosRocket,
  IoIosCar,
} from "react-icons/io";
import { GiAlienSkull } from "react-icons/gi";
import { fetchFilms, fetchPageDetails } from "../fetchAPI";
import { useState, useEffect } from "react";
import data from "../data.json";
import Crawl from "../components/Crawl/Crawl";
import { Link, useLoaderData, useParams } from "react-router-dom";

const icons = {
  characters: <IoIosPeople />,
  planets: <IoIosPlanet />,
  species: <GiAlienSkull />,
  vehicles: <IoIosCar />,
  starships: <IoIosRocket />,
};
const romanNumerals = {
  1: "I",
  2: "II",
  3: "III",
  4: "IV",
  5: "V",
  6: "VI",
  7: "VII",
  8: "VIII",
};
export async function loader({ params }) {
  return await fetchPageDetails(params.filmId);
}

function Details() {
  let { filmId } = useParams();
  const filmDetails = useLoaderData();
  const [films, setFilms] = useState([]);
  const [category, setCategory] = useState("characters");
  const categoryNames = data.categories;

  useEffect(() => {
    const loadFilms = async () => {
      const filmData = await fetchFilms();
      setFilms(filmData);
    };
    loadFilms();

    return () => {};
  }, []);

  return (
    <div className="App">
      <Section>
        {films.map((film, index) => (
          <Box
            key={film.episode_id}
            style={{
              backgroundColor: parseInt(filmId) === index + 1 ? "#ffc402" : "",
            }}
          >
            <Link to={`/films/${index + 1}`}>
              {romanNumerals[film.episode_id]}
            </Link>
          </Box>
        ))}
      </Section>
      <Section>
        <Crawl>{filmDetails.opening_crawl}</Crawl>
      </Section>

      <Section>
        {categoryNames.map((name) => {
          //create icon
          const icon = icons[name];
          return (
            <Box
              key={name}
              onClick={() => setCategory(name)}
              style={{
                backgroundColor: category === name ? "#ffc402" : "",
              }}
            >
              {name}
              {icon}
            </Box>
          );
        })}
      </Section>
      <Section>
        <TextContainer>
          <ul>
            {filmDetails[category].map((entry) => (
              <li key={entry.name}>{entry.name}</li>
            ))}
          </ul>
        </TextContainer>
      </Section>
    </div>
  );
}

export default Details;
