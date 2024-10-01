document.addEventListener("scroll", function () {
  const aboutSection = document.querySelector(".about p");
  const sectionPosition = aboutSection.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.2;

  if (sectionPosition < screenPosition) {
    aboutSection.classList.add("visible");
  }
});
const colorPicker = document.getElementById("color-picker");

// Obtém a cor atual da variável CSS --main-color
let currentColor = getComputedStyle(document.documentElement)
  .getPropertyValue("--main-color")
  .trim();

// Neste if é feita a verificação se o valor esta em formato RGB e se for ele converte para HEX
if (currentColor.startsWith("rgb")) {
  currentColor = rgbToHex(currentColor);
}

// Aqui é definido o valor inicial do seletor de cor para o valor de --main-color no css
colorPicker.value = currentColor;

// Essa função converte valores RGB para formato HEX
function rgbToHex(rgb) {
  const rgbValues = rgb.match(/\d+/g).map(Number);
  return (
    "#" +
    rgbValues
      .map((val) => {
        const hex = val.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      })
      .join("")
  );
}

// Adiciona o evento para atualizar a cor principal ao mudar o seletor
colorPicker.addEventListener("input", (event) => {
  const newColor = event.target.value;
  document.documentElement.style.setProperty("--main-color", newColor);
});

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header navbar a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header navbar a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};


