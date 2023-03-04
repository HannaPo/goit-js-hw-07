import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

const createGalleryCard = ({ preview, original, description }) => `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;

const markup = galleryItems.map(el => createGalleryCard(el)).join('');

galleryEl.insertAdjacentHTML('afterbegin', markup);

galleryEl.addEventListener('click', handleClickImg);

function handleClickImg(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }

  const bannerUrl = e.target.dataset.source;

  const modal = basicLightbox.create(`<img class="gallery__image" src="${bannerUrl}">`, {
    onShow: () => {
      window.addEventListener('keydown', handleKeydownEsc);
    },
    onClose: () => {
      window.removeEventListener('keydown', handleKeydownEsc);
    },
  });
    modal.show();

  function handleKeydownEsc(e) {
    if (e.code !== 'Escape') return;
    modal.close();
  }
}
