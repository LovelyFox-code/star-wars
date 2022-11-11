import React from "react";
import { fetchFilms } from "../fetchAPI";
import { Outlet, useLoaderData, useNavigation } from "react-router-dom";

export async function loader() {
  const films = await fetchFilms();
  return { films };
}

export default function Root() {
  const { films } = useLoaderData();
  const navigation = useNavigation();
  return (
    <>
      <div className={navigation.state === "loading" ? "loading" : ""}></div>
      <Outlet context={{ films }} />
    </>
  );
}
