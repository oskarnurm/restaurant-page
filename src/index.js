import "./style.css";
import renderHome from "./home.js";
import renderAbout from "./about.js";
import renderMenu from "./menu.js";

renderHome();

document.querySelector(".about").addEventListener("click", renderAbout);
document.querySelector(".menu").addEventListener("click", renderMenu);
document.querySelector(".home").addEventListener("click", renderHome);
console.log("hello");
