import React from "react";
import { fetchFilms } from "../fetchAPI";
import { Outlet, useLoaderData } from "react-router-dom";

export async function loader() {
  const films = await fetchFilms();
  return { films };
}

export default function Root() {
  const { films } = useLoaderData();
  return (
    <div>
      <Outlet context={{ films }} />
    </div>
  );
}
