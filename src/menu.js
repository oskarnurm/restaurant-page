export default function renderMenu() {
  const content = document.getElementById("content");
  content.textContent = "";
  const h1 = document.createElement("h1");
  h1.textContent = "Menu";
  const ul = document.createElement("ul");

  const li1 = document.createElement("li");
  const li2 = document.createElement("li");
  const li3 = document.createElement("li");

  li1.textContent = "TheBaus Special";
  li2.textContent = "The Bear Special";
  li3.textContent = "The Solobolo";

  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);

  content.appendChild(h1);
  content.appendChild(ul);
}
