import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import { ShowsContext } from "../contexts/ShowsContext";
import { ShowDetails } from "../components/ShowDetails";

export const ShowDetailsPage = () => {
  const { id } = useParams();
  const {
    state: { showsData },
  } = useContext(ShowsContext);

  const show = showsData?.find(
    (show) => Number(show?.show?.id) === Number(id)
  )?.show;

  return <ShowDetails show={show} />;
};
