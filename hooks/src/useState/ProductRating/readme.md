<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

-   [ProductRating][1]
    -   [Examples][2]
-   [Components][3]
    -   [Examples][4]
-   [StarComponent][5]
    -   [Parameters][6]
    -   [Examples][7]
-   [StarRating][8]
    -   [Parameters][9]
    -   [Examples][10]

## ProductRating

The Rating component consists of 5 stars. Each star is represented by a div element. 

-   When an div.star is clicked, the **selected class** should be added to that element and all divs before it. Also, the **selected class** should be removed from all div elements after it, if there are any.
    When a div element is clicked, the  **selected class** should be added to that div element and to all div elements before it. Also, the  **selected class** should be removed from all div elements after it, if there are any.
-   Read more about this component check out [moonhighway][11] and learn how to create a **class-based star component** over at [ scotch][12].
-   The component should render to this HTML code:

### Examples

```javascript
<div class="star-rating">
<div class="star selected"></div>
<div class="star selected"></div>
<div class="star selected"></div>
<div class="star"></div>
<div class="star"></div>
<p>3 of 5 stars</p>
</div>
```

## Components

RenderedComponent

-   This component will map over the Star Component and increment the key value.

### Examples

```javascript
<StarRating totalStars={5} />
```

```javascript
<StarRating>
<Star key=1 className="star selected">
<Star key=2 className="star selected">
<Star key=3 className="star selected">
<Star key=4 className="star">
<Star key=5 className="star">
<StarRating/>
```

## StarComponent

This function exists to be iter

### Parameters

-   `selected` **[boolean][13]** default value is false. -   changes the className property from .star to .star.selected
-   `onClick` **[function][14]** The callback that handles the click event.

### Examples

```javascript
<Star
key={currentStar}                           // #2
selected={currentStar < starsSelected}      // #3
onClick={() => selectStar(currentStar + 1)} // #4
/>
```

## StarRating

StarRating

-   This component will map over the Star Component and increment the key value. 
-   \#1 we set the initial state to 0 and it will increment up to the value of totalStars.
-   \#2 
-   \#3  n=currentValue, currentStar=index
-   \#4 key is incremented by the value of the index variable, currentStar
-   \#5 **selected** is determined to be true or false if the **currentStar** is greater than starsSelected
-   \#6

### Parameters

-   `$0` **[Object][15]** 
    -   `$0.totalStars`  
-   `starsSelected` **[Number][16]** The current state.
-   `selectStar` **[Function][14]** A setter function to set the state.
-   `totalStars` **[Number][16]** This number is our "iterator".

### Examples

```javascript
<StarRating totalStars={5} />
```

[1]: #productrating

[2]: #examples

[3]: #components

[4]: #examples-1

[5]: #starcomponent

[6]: #parameters

[7]: #examples-2

[8]: #starrating

[9]: #parameters-1

[10]: #examples-3

[11]: https://moonhighway.com/refactoring-the-star-rating-with-hooks

[12]: https://scotch.io/tutorials/build-a-star-rating-component-for-react

[13]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean

[14]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function

[15]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object

[16]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number
