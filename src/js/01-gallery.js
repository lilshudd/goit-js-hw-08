// Описаний в документації
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

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

const lightbox = new SimpleLightbox('.gallery a', {});

console.log(galleryItems);
