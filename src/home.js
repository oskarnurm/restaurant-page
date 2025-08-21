export default function renderHome() {
  const content = document.getElementById("content");
  content.textContent = "";
  const header = document.createElement("h1");
  const paragraph = document.createElement("p");
  const div = document.createElement("div");
  div.className = "gallery";
  header.textContent = "Welcome to Inters Inn";
  paragraph.textContent = "Here we serve food only of the freshest produce";
  content.appendChild(header);
  content.appendChild(paragraph);
  content.appendChild(div);
}
