import Box from "../components/Box/Box";
import Section from "../components/Section/Section";
import {
  IoIosPeople,
  IoIosPlanet,
  IoIosRocket,
  IoIosCar,
} from "react-icons/io";
import { GiAlienSkull } from "react-icons/gi";
import { fetchPageDetails } from "../fetchAPI";
import data from "../data.json";
import Crawl from "../components/Crawl/Crawl";
import {
  Link,
  Outlet,
  useLoaderData,
  useOutletContext,
  useParams,
} from "react-router-dom";
import TextContainer from "../components/Text-container/TextContainer";
import { useState } from "react";
import Button from "../components/Button/Button";

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
  const { films } = useOutletContext();
  let { filmId, category } = useParams();
  const filmDetails = useLoaderData();
  const [isAnimated, setIsAnimated] = useState(true);
  const categoryNames = data.categories;
  // Toggle text crawl animation
  const toggle = () => {
    setIsAnimated(!isAnimated);
  };
  return (
    <div className="App">
      <Section>
        {films.map((film, index) => (
          <Box
            size="small"
            key={film.episode_id}
            style={{
              // Highlight current box
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
        <h1>{filmDetails.title.toUpperCase()} </h1>
      </Section>
      {isAnimated ? (
        <Section>
          <Crawl>{filmDetails.opening_crawl}</Crawl>{" "}
        </Section>
      ) : (
        <Section>
          <TextContainer>{filmDetails.opening_crawl}</TextContainer>
        </Section>
      )}

      {isAnimated ? (
        <Button onClick={() => toggle()}>
          <h4>Show the text</h4>
        </Button>
      ) : (
        <Button onClick={() => toggle()}>
          <h4>Animate</h4>
        </Button>
      )}

      <Section>
        {categoryNames.map((name) => {
          //create icon
          const icon = icons[name];
          return (
            <Box
              key={name}
              style={{
                // Highlight current category
                backgroundColor: category === name ? "#ffc402" : "",
              }}
            >
              <Link to={`/films/${filmId}/categories/${name}`}>
                {name}
                {icon}
              </Link>
            </Box>
          );
        })}
      </Section>
      <Outlet />
    </div>
  );
}

export default Details;
