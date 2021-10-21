const title = document.querySelector("div.hello:first-child h1");

title.innerText = "HELLO";

function handleTitleClick() {
  title.style.color = "blue";
  console.log("Title was Clicked!");
}

function handleMouseEnter() {
  title.innerText = "Mouse is here!";
}

function handleMouseLeave() {
  title.innerText = "Mouse is gone!";
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
