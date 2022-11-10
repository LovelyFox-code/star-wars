import Section from "../components/Section/Section";
import TextContainer from "../components/Text-container/TextContainer";
import { fetchCategory } from "../fetchAPI";
import { useLoaderData } from "react-router-dom";

export async function loader({ params }) {
  return await fetchCategory(params.filmId, params.category);
}

function CategoryDetails() {
  const filmDetails = useLoaderData();

  return (
    <Section>
      <TextContainer>
        <ul>
          {filmDetails.map((entry) => (
            <li key={entry.name}>{entry.name}</li>
          ))}
        </ul>
      </TextContainer>
    </Section>
  );
}

export default CategoryDetails;
