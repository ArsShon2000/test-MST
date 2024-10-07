window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("darken", window.scrollY > 50);
});

const imagePaths = [
  "./src/svgIcons/insta.svg",
  "./src/svgIcons/nota.svg",
  "./src/svgIcons/in.svg",
  "./src/svgIcons/face.svg",
  "./src/svgIcons/tel.svg",
  "./src/svgIcons/you.svg",
];

const gallery = document.getElementById("imageGallery");
console.log(gallery);

function loadImages(paths) {
  paths.forEach((path) => {
    const imgContainer = document.createElement("a");
    imgContainer.classList.add("image-container");
    imgContainer.href = ""; 

    const imgElement = document.createElement("img");
    imgElement.src = path;
    imgElement.alt = "SVG изображение";

    imgContainer.appendChild(imgElement);

    gallery.appendChild(imgContainer);
  });
}

window.addEventListener("DOMContentLoaded", () => {
  loadImages(imagePaths);
  const burgerCheckbox = document.getElementById("burger-checkbox");
  const mobuleMenu = document.querySelector(".mobule__menu");

  burgerCheckbox.addEventListener("click", function () {
    if (burgerCheckbox.checked) {
      mobuleMenu.classList.add("open");
    } else {
      mobuleMenu.classList.remove("open");
    }
  });

  const menuItems = document.querySelectorAll(".mobule__item");
  menuItems.forEach((item) => {
    item.addEventListener("click", function () {
      mobuleMenu.classList.remove("open");
      burgerCheckbox.checked = false;
    });
  });
});

const form = document.getElementById("myForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(form);

  const formObject = {};
  formData.forEach((value, key) => {
    formObject[key] = value;
  });

  fetch("https://server.com/send-form", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formObject),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Успех:", data);
    })
    .catch((error) => {
      console.error("Ошибка:", error);
    });
});
