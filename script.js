"use strict";

function toggleTextColor() {
  let color = document.body.style.color;
  if (color === "gray") {
    document.body.style.color = "white";
  } else {
    document.body.style.color = "gray";
  }
}
