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

document.addEventListener("DOMContentLoaded", () => {
  fileUpload();
  selects();
  intro();
  faq();
  ourClients();
  homeNews();
  projectCards();
  realisedProjects();
  team();
});

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
