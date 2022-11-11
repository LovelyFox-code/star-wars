import { useEffect } from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import FlexContainer from "./components/Flex-container/FlexContainer";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate(-1);
    }, 5000);
    return () => {};
  }, [navigate]);

  return (
    <FlexContainer id="error-page">
      <div className="error_text">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <p>We will redirect you to the previous page!</p>
      </div>
    </FlexContainer>
  );
}
