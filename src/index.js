import { registerImage } from "./lazy";

const maximum = 122;
const minimum = 0;
const random = () => Math.floor(Math.random() * (maximum - minimum) + minimum);

const createImageNode = () => {
  const container = document.createElement("div");
  container.className = "p-4 bg-gray-200 mt-5";

  const image = document.createElement("img");
  image.className = "mx-auto";
  image.width = "320";
  image.dataset.src = `https://randomfox.ca/images/${random()}.jpg`;
  container.append(image);

  return container;
};

const mountNode = document.getElementById("app");
const buttonFox = document.getElementById("buttonFox");
const buttonClear = document.getElementById("deleteFoxes");

var loadedImages = 0;

const addImage = () => {
  const newImage = createImageNode();
  mountNode.append(newImage);
  registerImage(newImage);
  loadedImages += 1;
  console.log(`⚪ Se han agregado ${loadedImages} imágenes`);
  
};

buttonFox.addEventListener("click", addImage);

buttonClear.addEventListener("click", () => {
  let containerWithImage = document.querySelectorAll("#app .p-4"); //!Obtiene nodeList
  containerWithImage = Array.from(containerWithImage); //!Convierte a Array
  containerWithImage.forEach((element) => {
    element.remove();
  });
});

//*Las líneas de abajo ya muestran 1 imagen por defecto
//const nuevaImagen = createImageNode();
//mountNode.append(nuevaImagen);
