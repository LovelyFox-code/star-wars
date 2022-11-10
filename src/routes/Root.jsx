import React from "react";
import { Link } from "react-router-dom";
import Box from "../components/Box/Box";
import FlexContainer from "../components/Flex-container/FlexContainer";
import HeroTitle from "../components/Hero-title/HeroTitle";
import { fetchFilms } from "../fetchAPI";
import { useLoaderData } from "react-router-dom";

export async function loader() {
  const films = await fetchFilms();
  return { films };
}

export default function Root() {
  const { films } = useLoaderData();
  return (
    <div>
      <FlexContainer>
        <HeroTitle>
          <h1>starwars</h1>
          <p>encyclopedia</p>
        </HeroTitle>
      </FlexContainer>
      <FlexContainer>
        {films.map((film, index) => (
          <Box key={film.episode_id} size="medium">
            <Link to={`films/${index + 1}`}>{film.title}</Link>
          </Box>
        ))}
      </FlexContainer>
    </div>
  );
}
