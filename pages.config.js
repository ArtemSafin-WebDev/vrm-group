import home from "./pages-data/home";
import certificates from "./pages-data/certificates";
import reviews from "./pages-data/reviews";
import news from "./pages-data/news";
import individualSolutions from "./pages-data/individual-solutions";
import about from "./pages-data/about";
import article from "./pages-data/article";
import notFound from "./pages-data/404";
import brand from "./pages-data/brand";
import faq from "./pages-data/faq";
import subjects from "./pages-data/subjects";
import subjectsBasic from "./pages-data/subjectsBasic";

const pagesConfig = {
  ...home,
  ...certificates,
  ...reviews,
  ...news,
  ...individualSolutions,
  ...about,
  ...article,
  ...notFound,
  ...brand,
  ...faq,
  ...subjects,
  ...subjectsBasic,
};

export default pagesConfig;
