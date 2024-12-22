import "virtual:svg-icons-register";
import "../scss/style.scss";
import ourClients from "./ourClients";
import faq from "./faq";
import homeNews from "./homeNews";
import projectCards from "./projectCards";
import realisedProjects from "./realisedProjects";
import team from "./team";
import fileUpload from "./fileUpload";
import selects from "./selects";
import intro from "./intro";
import reviewCards from "./reviewCards";
import fancybox from "./fancybox";
import modals from "./modals";

import reviewsSlider from "./reviewsSlider";
import catalog from "./catalog";
import equipment from "./equipment";
import productGallery from "./productGallery";
import simpleCounter from "./simpleCounter";
import labSlider from "./labSlider";
import menu from "./menu";
import options from "./options";
import forms from "./forms";
import complectation from "./complectation";
import cart from "./cart";

document.addEventListener("DOMContentLoaded", () => {
  menu();
  fileUpload();
  selects();
  modals();
  fancybox();
  intro();
  faq();
  ourClients();
  homeNews();
  projectCards();
  realisedProjects();
  reviewsSlider();
  team();
  reviewCards();
  modals();
  catalog();
  equipment();
  productGallery();
  simpleCounter();
  labSlider();
  options();
  forms();
  complectation();
  cart();
});

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
