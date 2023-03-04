import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

const createGalleryCard = ({ preview, original, description }) => `
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;

const markup = galleryItems.map(el => createGalleryCard(el)).join('');

galleryEl.insertAdjacentHTML('afterbegin', markup);

let gallery = new SimpleLightbox('.gallery__item', {
  captionsData: 'alt',
  captionDelay: 250,
});
