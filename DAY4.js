const h2 = document.querySelector("h2");

function handleTitleClick() {
  h2.innerText = "That was a right click!";
  h2.style.color = "#e74c3c";
}

function handleMouseEnter() {
  h2.innerText = "Mouse is here!";
  h2.style.color = "#1abc9c";
}

function handleMouseLeave() {
  h2.innerText = "Mouse is gone!";
  h2.style.color = "#3498db";
}

function handleWindowResize() {
  h2.innerText = "You just resized!";
  h2.style.color = "#9b59b6";
}

function handleWindowCopy() {
  alert("copier!");
}

function handleWindowOffline() {
  alert("SOS no WIFI");
}

function handleWindowOnline() {
  alert("ALL GOOOOD");
}

h2.addEventListener("click", handleTitleClick);
h2.addEventListener("mouseenter", handleMouseEnter);
h2.addEventListener("mouseleave", handleMouseLeave); //더 선호

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);

과제;

const title = document.querySelector("h2");

const superEventHandler = {
  handleTitleClick: function () {
    title.innerText = "That was a right click!";
    title.style.color = "#e74c3c";
  },

  handleMouseEnter: function () {
    title.innerText = "Mouse is here!";
    title.style.color = "#1abc9c";
  },

  handleMouseLeave: function () {
    title.innerText = "Mouse is gone!";
    title.style.color = "#3498db";
  },

  handleWindowResize: function () {
    title.innerText = "You just resized!";
    title.style.color = "#9b59b6";
  },
};

title.addEventListener("click", superEventHandler.handleTitleClick);
title.addEventListener("mouseenter", superEventHandler.handleMouseEnter);
title.addEventListener("mouseleave", superEventHandler.handleMouseLeave);
window.addEventListener("resize", superEventHandler.handleWindowResize);
