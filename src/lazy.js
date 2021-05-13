const isIntersecting = (entry) => {
  return entry.isIntersecting; //* true si está dentro de la pantalla del navegador
};

var renderImages = 0;

const loadImage = (entry) => {
  const container = entry.target; //* div
  const image = container.firstChild;
  const url = image.dataset.src;
  //*carga imagen
  image.src = url;
  observer.unobserve(container);
  renderImages += 1;
  console.log(
    `🟣 Se han cargado ${renderImages} imágenes`
  );
};

const observer = new IntersectionObserver((allEntries) => {
  allEntries.filter(isIntersecting).forEach(loadImage);
});

export const registerImage = (image) => {
  observer.observe(image);
};
