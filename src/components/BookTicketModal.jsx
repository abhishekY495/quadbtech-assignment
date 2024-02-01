import React, { useState } from "react";
import toast from "react-hot-toast";

export const BookTicketModal = ({ showModal, setShowModal, show }) => {
  if (!showModal) return null;

  const [numberOfTickets, setNumberOfTickets] = useState(0);

  const { name } = show;

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (numberOfTickets === 0) {
      toast.error("Book atleast 1 ticket to proceed");
    } else if (numberOfTickets <= 5) {
      toast.success(`${numberOfTickets} ticket/s Booked`);
      setShowModal(false);
    } else {
      toast.error("Only 5 tickets can be Booked");
    }
  };

  return (
    <div
      className="fixed w-screen h-screen top-0 bg-neutral-900/50 backdrop-blur-[2px] transition-all"
      onClick={() => setShowModal(false)}
    >
      <form
        onClick={(e) => e.stopPropagation()}
        onSubmit={formSubmitHandler}
        className="w-[300px] m-auto bg-neutral-200 mt-28 p-3 rounded-md"
      >
        <div className="flex gap-3 flex-col">
          <p className="text-3xl font-bold border-b-2 border-b-neutral-400 w-full">
            {name}
          </p>
          <label className="text-lg">
            Number of Tickets:{" "}
            <input
              type="number"
              className="border-neutral-300 border-2 bg-neutral-100 focus:outline-none focus:border-neutral-400 text-center rounded px-2 py-[2px] text-base"
              min={0}
              max={5}
              onChange={(e) => setNumberOfTickets(Number(e.target.value))}
            />
          </label>
        </div>
        <button
          type="submit"
          className="bg-blue-400 w-full text-lg font-bold rounded-md mt-3 hover:bg-blue-400/80 transition-all"
        >
          Book
        </button>
      </form>
    </div>
  );
};
