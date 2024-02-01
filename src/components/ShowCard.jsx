import React from "react";
import { Link } from "react-router-dom";

import noImage from "../assets/no-image.jpg";

export const ShowCard = ({ show }) => {
  const { id, image, name, rating } = show?.show;

  return (
    <Link
      to={`/show/${id}`}
      className="w-[250px] h-[420px] flex flex-col relative hover:scale-[1.02] transition-all max-[860px]:w-[250px]"
    >
      <img
        src={image?.original || noImage}
        alt={name}
        className="h-[400px] object-cover bg-neutral-200 rounded-md border"
      />
      <span className="absolute top-0 text-xl font-semibold bg-yellow-300 px-2 rounded-tl-md">
        {rating?.average}
      </span>
      <p className="font-bold text-3xl">{name}</p>
    </Link>
  );
};
