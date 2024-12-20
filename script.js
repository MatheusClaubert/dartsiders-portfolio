document.addEventListener("DOMContentLoaded", () => {
  const textElement = document.querySelector(".text-animation .highlight");
  const words = ['Fullstack Developer'];
  let currentWordIndex = 0;
  let currentCharIndex = 0;

  function typeWriter() {
    if (currentCharIndex < words[currentWordIndex].length) {
      textElement.textContent += words[currentWordIndex].charAt(currentCharIndex);
      currentCharIndex++;
      setTimeout(typeWriter, 100); // Velocidade de digitação
    } else {
      setTimeout(eraseWriter, 1500); // Pausa antes de apagar
    }
  }

  function eraseWriter() {
    if (currentCharIndex > 0) {
      textElement.textContent = words[currentWordIndex].substring(0, currentCharIndex - 1);
      currentCharIndex--;
      setTimeout(eraseWriter, 100); // Velocidade de apagamento
    } else {
      currentWordIndex = (currentWordIndex + 1) % words.length;
      setTimeout(typeWriter, 500); // Pausa antes de recomeçar
    }
  }

  typeWriter();
});
document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.querySelector(".theme-toggle");
  const body = document.body;
  const lightIcon = document.getElementById("light-icon");
  const darkIcon = document.getElementById("dark-icon");

  // Alternar o tema
  themeToggle.addEventListener("click", () => {
    body.classList.toggle("light-mode");

    // Alterar visibilidade dos ícones
    if (body.classList.contains("light-mode")) {
      lightIcon.style.display = "none";
      darkIcon.style.display = "block";
    } else {
      lightIcon.style.display = "block";
      darkIcon.style.display = "none";
    }
  });
});