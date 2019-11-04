// Logic for the observer and infinite scroll; try later to make a general observer

// Article: https://medium.com/walmartlabs/infinite-scrolling-the-right-way-11b098a08815
// Code (article is not complete; code is complete): https://jsfiddle.net/valkyris/43fmku20/693/
// Have maby 20 elements on screen
// when intersecting a sentinel, change the attribute of those 20 elements, and at the same time, increment the padding on top
// This way, the elements are pushed down and changed (change maby 10 of 20?)
// And no need to add / remove elements form the DOM
