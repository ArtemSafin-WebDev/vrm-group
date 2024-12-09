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
import gallerySlider from "./gallerySlider";
import reviewsSlider from "./reviewsSlider";
import catalog from "./catalog";
import equipment from "./equipment";
import productGallery from "./productGallery";
import simpleCounter from "./simpleCounter";

document.addEventListener("DOMContentLoaded", () => {
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
  gallerySlider();
  catalog();
  equipment();
  productGallery();
  simpleCounter();
});

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
