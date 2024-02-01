import React, { useContext, useEffect } from "react";

import { API_URL } from "../utils/constants";
import { ShowCard } from "../components/ShowCard";
import { ShowsContext } from "../contexts/ShowsContext";

export const HomePage = () => {
  const {
    state: { showsData },
    dispatch,
  } = useContext(ShowsContext);

  const getShowsData = async () => {
    dispatch({ type: "LOADING" });
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      dispatch({ type: "SHOWS_DATA", payload: data });
    } catch (error) {
      console.error(error);
      dispatch({ type: "SHOWS_DATA_ERROR", payload: error });
    }
  };

  useEffect(() => {
    getShowsData();
  }, []);

  return (
    <div className="w-[800px] m-auto px-8 grid grid-cols-3 justify-items-center gap-x-[100px] gap-y-[30px] max-[890px]:w-full max-[890px]:flex max-[890px]:gap-x-[50px] flex-wrap justify-center">
      {showsData?.map((show) => {
        return <ShowCard show={show} key={show?.show?.id} />;
      })}
    </div>
  );
};
