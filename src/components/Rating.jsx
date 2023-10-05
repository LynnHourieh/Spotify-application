import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import {
  faStar as solidStar,
  faStar as regularStar,
} from "@fortawesome/free-regular-svg-icons";

function Rating({ rating }) {
  return (
    <div className="rating">
      <span>
        <FontAwesomeIcon
          style={{ color: "#FFC000" }}
          icon={
            rating >= 1 ? faStar : rating >= 0.5 ? faStarHalfAlt : regularStar
          }
          className={rating >= 1 ? "fill" : ""}
        />
      </span>
      <span>
        <FontAwesomeIcon
          style={{ color: "#FFC000" }}
          icon={
            rating >= 2 ? faStar : rating >= 1.5 ? faStarHalfAlt : regularStar
          }
          className={rating >= 2 ? "fill" : ""}
        />
      </span>
      <span>
        <FontAwesomeIcon
          style={{ color: "#FFC000" }}
          icon={
            rating >= 3 ? faStar : rating >= 2.5 ? faStarHalfAlt : regularStar
          }
          className={rating >= 3 ? "fill" : ""}
        />
      </span>
      <span>
        <FontAwesomeIcon
          style={{ color: "#FFC000" }}
          icon={
            rating >= 4 ? faStar : rating >= 3.5 ? faStarHalfAlt : regularStar
          }
          className={rating >= 4 ? "fill" : ""}
        />
      </span>
      <span>
        <FontAwesomeIcon
          style={{ color: "#FFC000" }}
          icon={
            rating >= 5 ? faStar : rating >= 4.5 ? faStarHalfAlt : regularStar
          }
          className={rating >= 5 ? "fill" : ""}
        />
      </span>
    </div>
  );
}

export default Rating;
