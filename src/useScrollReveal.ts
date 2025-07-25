import { useEffect } from "react";

function useScrollReveal() {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.fade-in-background-scroll, .fade-in-up-scroll');
    const observer = new window.IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target); // Solo anima una vez
          }
        });
      },
      { threshold: 0.15 }
    );
    revealElements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default useScrollReveal;
