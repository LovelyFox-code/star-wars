import Section from "../components/Section/Section";
import TextContainer from "../components/Text-container/TextContainer";
import { fetchCategory } from "../fetchAPI";
import { useLoaderData } from "react-router-dom";
import ListItems from "../components/ListItem/ListItems";

export async function loader({ params }) {
  return await fetchCategory(params.filmId, params.category);
}

function CategoryDetails() {
  const filmDetails = useLoaderData();

  return (
    <Section>
      <TextContainer>
        <ListItems filmDetails={filmDetails} />
      </TextContainer>
    </Section>
  );
}

export default CategoryDetails;
