/**
 * @name ProductRating
 * @description - The Rating component consists of 5 stars. Each star is represented by a div element. 
 * - When an div.star is clicked, the **selected class** should be added to that element and all divs before it. Also, the **selected class** should be removed from all div elements after it, if there are any.
When a div element is clicked, the  **selected class** should be added to that div element and to all div elements before it. Also, the  **selected class** should be removed from all div elements after it, if there are any.
 * - Read more about this component check out {@link https://moonhighway.com/refactoring-the-star-rating-with-hooks|moonhighway} and learn how to create a **class-based star component** over at {@link https://scotch.io/tutorials/build-a-star-rating-component-for-react  scotch}.
 * - The component should render to this HTML code: 
 * @example
   <div class="star-rating">
     <div class="star selected"></div>
     <div class="star selected"></div>
     <div class="star selected"></div>
     <div class="star"></div>
     <div class="star"></div>
     <p>3 of 5 stars</p>
   </div>
*/

/**
 * @name Components
 * @description - RenderedComponent
 * - This component will map over the Star Component and increment the key value. 
 * @example
 * <StarRating totalStars={5} />
 * @example
  <StarRating>
    <Star key=1 className="star selected">
    <Star key=2 className="star selected">
    <Star key=3 className="star selected">
    <Star key=4 className="star">
    <Star key=5 className="star">
  <StarRating/>
 * 
 */

import React, { useState } from "react";
import "./ProductRating.css";



/**
 * @name StarComponent
 * @description - This function exists to be iter
 * @param {boolean} selected 
 * - default value is false. 
 * - changes the className property from .star to .star.selected 
 * @param {function}  onClick - The callback that handles the click event.
 * @example
        <Star
          key={currentStar}                           // #2
          selected={currentStar < starsSelected}      // #3
          onClick={() => selectStar(currentStar + 1)} // #4
        />
 */
export const Star = ({ selected = false, onClick = f => f }) => (
  <div className={selected ? "star selected" : "star"} onClick={onClick} />
);

/**
 * @description - StarRating
  - This component will map over the Star Component and increment the key value. 
  - #1 we set the initial state to 0 and it will increment up to the value of totalStars.
  - #2 
  - #3  n=currentValue, currentStar=index
  - #4 key is incremented by the value of the index variable, currentStar
  - #5 **selected** is determined to be true or false if the **currentStar** is greater than starsSelected
  - #6 
 * @param {Number} starsSelected - The current state.
 * @param {Function} selectStar - A setter function to set the state.
 * @param {Number} totalStars - This number is our "iterator".
 * @example
 * <StarRating totalStars={5} />
 */

const StarRating = ({ totalStars }) => {
  const [starsSelected, selectStar] = useState(0);      //#1
  return (
    <div className="star-rating">
      {[...Array(totalStars)]                           //#2 
      .map((n, currentStar) => (                        //#3 
          <Star
            key={currentStar}                           //#4 
            selected={currentStar < starsSelected}      //#5
            onClick={() => selectStar(currentStar + 1)} //#6
          />
        )
      )}
      <p>
        {starsSelected} of {totalStars} stars
      </p>
    </div>
  );
};


export default StarRating;










