/* Progressive, event-driven depth. No sensors, libraries or perpetual loop. */
(() => {
  "use strict";

  function initDepth() {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const cardSelector = ".service-card, .deep-card, .landing-card, .vehicle-card, " +
      ".review-grid article, .service-review-grid article, .city-price-card, " +
      ".lw-partners .fleet-card, .lw-partners .mockup, .lw-partners .trust-card, .lw-partners .pricing-card";
    const sceneElements = [...document.querySelectorAll(".hero, .service-landing-hero")];
    const scenes = sceneElements.map((element) => ({ element, x: 0, y: 0 }));
    let activeCard = null;
    let cardPoint = null;
    let pendingFrame = 0;

    const revealObserver = "IntersectionObserver" in window
      ? new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("lw-depth-visible");
          observer.unobserve(entry.target);
        });
      }, { threshold: .08, rootMargin: "0px 0px -20px 0px" })
      : null;

    function prepareCards(container) {
      const cards = [];
      if (container.matches && container.matches(cardSelector)) cards.push(container);
      if (container.querySelectorAll) cards.push(...container.querySelectorAll(cardSelector));
      cards.forEach((card) => {
        if (card.classList.contains("lw-depth-card")) return;
        card.classList.add("lw-depth-card");
        // Existing service reveals keep their original timing and observer.
        // Form vehicle choices appear immediately whenever their content changes.
        if (revealObserver && !reducedMotion.matches &&
            !card.matches(".reveal-ready, .vehicle-card") &&
            card.getBoundingClientRect().top > window.innerHeight) {
          card.classList.add("lw-depth-enter");
          revealObserver.observe(card);
        }
      });
    }

    function resetCard() {
      if (!activeCard) return;
      activeCard.classList.remove("lw-depth-hover");
      activeCard.style.removeProperty("--lw-tilt-x");
      activeCard.style.removeProperty("--lw-tilt-y");
      activeCard = null;
      cardPoint = null;
    }

    function paint() {
      pendingFrame = 0;
      if (reducedMotion.matches || document.hidden) return;
      const mobile = window.innerWidth <= 430;
      const viewportHeight = window.innerHeight;
      scenes.forEach((scene) => {
        const rect = scene.element.getBoundingClientRect();
        if (rect.bottom <= 0 || rect.top >= viewportHeight) return;
        const progress = Math.min(1, Math.max(0, -rect.top / Math.max(rect.height, 1)));
        const scrollOffset = progress * (mobile ? 7 : 25);
        scene.element.style.setProperty("--lw-scene-x", `${(scene.x * 9).toFixed(2)}px`);
        scene.element.style.setProperty("--lw-scene-y", `${(scrollOffset + scene.y * (mobile ? 0 : 7)).toFixed(2)}px`);
        scene.element.style.setProperty("--lw-scene-rx", `${(-scene.y * .65).toFixed(2)}deg`);
        scene.element.style.setProperty("--lw-scene-ry", `${(scene.x * .9).toFixed(2)}deg`);
      });
      if (activeCard && cardPoint && activeCard.isConnected) {
        const rect = activeCard.getBoundingClientRect();
        const x = Math.max(-1, Math.min(1, ((cardPoint.x - rect.left) / rect.width - .5) * 2));
        const y = Math.max(-1, Math.min(1, ((cardPoint.y - rect.top) / rect.height - .5) * 2));
        activeCard.style.setProperty("--lw-tilt-x", `${(-y * 3.5).toFixed(2)}deg`);
        activeCard.style.setProperty("--lw-tilt-y", `${(x * 4).toFixed(2)}deg`);
      }
    }

    function schedulePaint() {
      if (!pendingFrame && !reducedMotion.matches && !document.hidden) {
        pendingFrame = window.requestAnimationFrame(paint);
      }
    }

    scenes.forEach((scene) => {
      scene.element.classList.add("lw-depth-scene");
      scene.element.addEventListener("pointermove", (event) => {
        if (reducedMotion.matches || !finePointer.matches || event.pointerType === "touch") return;
        const rect = scene.element.getBoundingClientRect();
        scene.x = Math.max(-1, Math.min(1, ((event.clientX - rect.left) / rect.width - .5) * 2));
        scene.y = Math.max(-1, Math.min(1, ((event.clientY - rect.top) / rect.height - .5) * 2));
        schedulePaint();
      }, { passive: true });
      scene.element.addEventListener("pointerleave", () => {
        scene.x = 0;
        scene.y = 0;
        schedulePaint();
      }, { passive: true });
    });

    prepareCards(document);

    document.addEventListener("pointermove", (event) => {
      if (reducedMotion.matches || !finePointer.matches || event.pointerType === "touch") return;
      const target = event.target instanceof Element ? event.target : null;
      const card = target && target.closest(cardSelector);
      if (!card || target.closest("input, select, textarea") ||
          (card.classList.contains("reveal-ready") && !card.classList.contains("revealed"))) {
        resetCard();
        return;
      }
      if (card !== activeCard) {
        resetCard();
        activeCard = card;
        card.classList.add("lw-depth-hover");
      }
      cardPoint = { x: event.clientX, y: event.clientY };
      schedulePaint();
    }, { passive: true });

    document.documentElement.addEventListener("pointerleave", resetCard, { passive: true });
    window.addEventListener("blur", resetCard);
    window.addEventListener("scroll", () => {
      resetCard();
      schedulePaint();
    }, { passive: true });
    window.addEventListener("resize", schedulePaint, { passive: true });

    // Booking vehicle cards are replaced when service or route changes.
    const vehicleBlock = document.getElementById("vehicleBlock");
    if (vehicleBlock && "MutationObserver" in window) {
      new MutationObserver((records) => {
        records.forEach((record) => record.addedNodes.forEach((node) => {
          if (node.nodeType === 1) prepareCards(node);
        }));
      }).observe(vehicleBlock, { childList: true, subtree: true });
    }

    function onMotionPreferenceChange() {
      resetCard();
      if (reducedMotion.matches) {
        if (pendingFrame) window.cancelAnimationFrame(pendingFrame);
        pendingFrame = 0;
        document.querySelectorAll(".lw-depth-enter").forEach((card) => card.classList.add("lw-depth-visible"));
        scenes.forEach(({ element }) => {
          ["--lw-scene-x", "--lw-scene-y", "--lw-scene-rx", "--lw-scene-ry"].forEach((property) => element.style.removeProperty(property));
        });
      } else {
        schedulePaint();
      }
    }

    if (reducedMotion.addEventListener) reducedMotion.addEventListener("change", onMotionPreferenceChange);
    if (finePointer.addEventListener) finePointer.addEventListener("change", resetCard);
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) resetCard();
      else schedulePaint();
    });
    schedulePaint();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initDepth, { once: true });
  else initDepth();
})();
