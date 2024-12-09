import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function reviewCards() {
  document.addEventListener("click", (event) => {
    const target = event.target as HTMLElement;
    const isReviewCardBtn =
      target.matches(".review-card__toggle-btn") ||
      target.closest(".review-card__toggle-btn");
    if (!isReviewCardBtn) return;
    const card = target.closest<HTMLElement>(".review-card");
    if (!card) return;
    card.classList.toggle("all-shown");
    ScrollTrigger.refresh();
  });
}
