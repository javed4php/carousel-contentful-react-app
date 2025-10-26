import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./CarouselArrows.css"; // We'll style them here

export const NextArrow = ({ className, style, onClick }) => {
  return (
    <div
      className="custom-arrow next-arrow"
      onClick={onClick}
    >
      <FaChevronRight size={24} />
    </div>
  );
};

export const PrevArrow = ({ className, style, onClick }) => {
  return (
    <div
      className="custom-arrow prev-arrow"
      onClick={onClick}
    >
      <FaChevronLeft size={24} />
    </div>
  );
};
