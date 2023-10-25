const element = document.querySelector(".parent-div");
const computedStyles = window.getComputedStyle(element);

const height = computedStyles.getPropertyValue("height");
const width = computedStyles.getPropertyValue("width");

console.log(height, width);
