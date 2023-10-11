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

// function convertPopularityToStars(popularity) {
//   if (popularity >= 0 && popularity <= 20) {
//     return 1;
//   } else if (popularity > 20 && popularity <= 40) {
//     return 2;
//   } else if (popularity > 40 && popularity <= 60) {
//     return 3;
//   } else if (popularity > 60 && popularity <= 80) {
//     return 4;
//   } else if (popularity > 80 && popularity <= 100) {
//     return 5;
//   } else {
//     return 0; // You can handle invalid values however you like
//   }
// }

// function Rating({ rating }) {
//   // Use the convertPopularityToStars function to get the star rating
//   const starRating = convertPopularityToStars(rating);

//   return (
//     <div className="rating">
//       {[1, 2, 3, 4, 5].map((index) => (
//         <span key={index}>
//           <FontAwesomeIcon
//             style={{ color: "#FFC000" }}
//             icon={
//               index <= starRating
//                 ? faStar
//                 : index - 0.5 <= starRating
//                 ? faStarHalfAlt
//                 : regularStar
//             }
//             className={index <= starRating ? "fill" : ""}
//           />
//         </span>
//       ))}
//     </div>
//   );
// }


export default Rating;
