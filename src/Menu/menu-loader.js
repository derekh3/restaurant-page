import MenuImage from "./menu.jpg";

export default function loadMenuContent(contentDiv) {
  // const content = document.querySelector(".content");
  const content = contentDiv;
  const title = document.createElement("h1");
  const text = document.createElement("p");

  title.textContent = "Menu";

  const Image1 = new Image();
  Image1.src = MenuImage;

  text.innerHTML =
    "$15 - Classic Burger: A juicy, all-beef patty topped with cheese, lettuce, tomato, and pickles, served on a toasted bun. <br><br>$11 - Grilled Cheese Sandwich: Melted cheese between two slices of toasted bread, served with a side of tomato soup for dipping.<br><br>$13 - Chicken and Waffles: Crispy fried chicken served over a warm, fluffy waffle, drizzled with maple syrup.<br><br>$16 - BBQ Ribs: Slow-cooked, fall-off-the-bone ribs coated in a tangy BBQ sauce.";
  content.appendChild(title);
  content.appendChild(Image1);
  content.appendChild(text);
  return content;
}
