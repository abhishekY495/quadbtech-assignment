import React, { useState } from "react";

import starLogo from "../assets/star.png";
import noImage from "../assets/no-image.jpg";
import { BookTicketModal } from "./BookTicketModal";

export const ShowDetails = ({ show }) => {
  const { name, image, rating, summary } = show;
  const [showModal, setShowModal] = useState(false);

  const bookTicketBtnHandler = () => setShowModal(!showModal);

  return (
    <>
      {showModal && (
        <BookTicketModal
          showModal={showModal}
          setShowModal={setShowModal}
          show={show}
        />
      )}
      <div className="w-[900px] m-auto px-5 flex flex-col gap-3 mb-[400px] max-[930px]:w-full">
        <div className="flex items-center justify-between border-b-2">
          <p className="text-4xl font-bold">{name}</p>
          {rating?.average && (
            <div className="flex items-center gap-1">
              <img src={starLogo} alt="star" className="w-6 mb-1" />
              <p className="text-2xl font-bold">{rating?.average}</p>
            </div>
          )}
        </div>
        <div className="max-[450px]:flex flex-col">
          <img
            src={image?.original || noImage}
            alt={name}
            className="w-[250px] h-[340px] object-cover rounded-md float-left mr-5 max-[450px]:w-full max-[450px]:h-full max-[450px]:mb-2"
          />
          <p
            dangerouslySetInnerHTML={{ __html: summary }}
            className="text-lg leading-6"
          ></p>
        </div>
        <button
          className="bg-teal-400 py-1 text-xl font-bold rounded-md hover:cursor-pointer hover:bg-teal-500"
          onClick={bookTicketBtnHandler}
        >
          Book Tickets
        </button>
      </div>
    </>
  );
};
