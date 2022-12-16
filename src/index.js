import loadHomeContent from "./Home/home-loader.js";
import loadContactContent from "./Contact/contact-loader.js";
import loadMenuContent from "./Menu/menu-loader.js";
import "./style.css";

let contentDiv = document.querySelector(".content");
const contactTab = document.querySelector(".contact.tab");
const homeTab = document.querySelector(".home.tab");
const menuTab = document.querySelector(".menu.tab");

let currentTab = "home";

contactTab.onclick = () => {
  deleteContent(contentDiv);
  loadContact();
};

menuTab.onclick = () => {
  deleteContent(contentDiv);
  loadMenu();
};

homeTab.onclick = () => {
  deleteContent(contentDiv);
  loadHome();
};

loadHome();

function loadHome() {
  contentDiv = loadHomeContent(contentDiv);
}

function loadContact() {
  contentDiv = loadContactContent(contentDiv);
}

function loadMenu() {
  contentDiv = loadMenuContent(contentDiv);
}

function deleteContent(element) {
  element.innerHTML = "";
}
