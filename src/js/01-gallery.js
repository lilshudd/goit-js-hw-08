import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');

function createGalleryMarkup() {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
          </a>
        </div>
      `;
    })
    .join('');
}

galleryContainer.innerHTML = createGalleryMarkup();

const galleryImages = galleryContainer.querySelectorAll('.gallery__image');

galleryImages.forEach((image, index) => {
  image.addEventListener('click', event => {
    event.preventDefault();

    const lightbox = basicLightbox.create(`
      <img src="${galleryItems[index].original}" alt="${galleryItems[index].description}" />
    `);
    lightbox.show();
  });
});

console.log(galleryItems);
