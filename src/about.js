export default function renderAbout() {
  const aboutDiv = document.getElementById("content");
  aboutDiv.textContent = "";
  const aboutH = document.createElement("h1");
  const aboutP = document.createElement("p");
  aboutH.textContent = "About Us";
  aboutP.textContent =
    "Inters are traditionally feeders, someone needs to feed the inters, hence Inters Inn was born";
  aboutDiv.appendChild(aboutH);
  aboutDiv.appendChild(aboutP);
}
