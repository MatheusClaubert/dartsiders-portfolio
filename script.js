document.addEventListener("DOMContentLoaded", () => {
  const textElement = document.querySelector(".text-animation .highlight");
  if (!textElement) return; // Garante que o elemento existe

  const words = ["Fullstack Developer"];
  let currentWordIndex = 0;
  let currentCharIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    const currentWord = words[currentWordIndex];
    if (isDeleting) {
      currentCharIndex--;
    } else {
      currentCharIndex++;
    }

    textElement.textContent = currentWord.substring(0, currentCharIndex);

    let typingSpeed = isDeleting ? 50 : 100; // Mais rápido ao apagar
    if (!isDeleting && currentCharIndex === currentWord.length) {
      typingSpeed = 1500; // Pausa após digitação completa
      isDeleting = true;
    } else if (isDeleting && currentCharIndex === 0) {
      isDeleting = false;
      currentWordIndex = (currentWordIndex + 1) % words.length;
      typingSpeed = 500; // Pausa antes de começar a digitar
    }

    setTimeout(typeEffect, typingSpeed);
  }

  typeEffect();
});
document.addEventListener("DOMContentLoaded", function () {
  const timeline = document.querySelector(".timeline-items");
  const line = document.querySelector(".timeline-items::before");

  if (timeline && line) {
    const firstItem = timeline.firstElementChild;
    const lastItem = timeline.lastElementChild;
    
    if (firstItem && lastItem) {
      const start = firstItem.offsetTop;
      const end = lastItem.offsetTop + lastItem.offsetHeight;
      line.style.height = `${end - start}px`;
    }
  }
});
