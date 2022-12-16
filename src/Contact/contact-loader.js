import ContactImage from "./mail.jpg";

export default function loadContactContent(contentDiv) {
  // const content = document.querySelector(".content");
  const content = contentDiv;
  const title = document.createElement("h1");
  const text = document.createElement("p");

  title.textContent = "Contact";

  const Image1 = new Image();
  Image1.src = ContactImage;

  text.textContent =
    "Name: American Comfort\nAddress: 123 Main Street, Anytown, USA 12345\nPhone: 555-555-5555\nEmail: info@americancomfort.com";
  content.appendChild(title);
  content.appendChild(Image1);
  content.appendChild(text);
  return content;
}
