import HomeImage from "./chicken_veggies.jpg";

export default function loadHomeContent(contentDiv) {
  // const content = document.querySelector(".content");
  const content = contentDiv;
  const title = document.createElement("h1");
  const text = document.createElement("p");

  title.textContent = "American Comfort";

  const Image1 = new Image();
  Image1.src = HomeImage;

  text.textContent =
    "Our restaurant is the original home of American Comfort. We will delight your senses with nostalgia and authentic home cooking. Please swing on by and try some of our amazing food. You won't regret it. We guarantee it.";
  content.appendChild(title);
  content.appendChild(Image1);
  content.appendChild(text);
  return content;
}
