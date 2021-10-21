const title = document.querySelector(".hello h1");

title.innerText = "HELLO";

function handleTitleClick() {
  title.style.color = "blue";
  console.log("Title was Clicked!");
}
title.addEventListener("click", handleTitleClick);
