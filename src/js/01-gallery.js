// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainerEl = document.querySelector('.gallery');

const createMarkup = galleryItems => {
  return galleryItems
    .map(galleryItem => {
      const { preview, original, description } = galleryItem;
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join('');
};
createMarkup(galleryItems);

const showMarkup = galleryContainerEl.insertAdjacentHTML(
  'beforeend',
  createMarkup(galleryItems)
);

console.log(galleryItems);

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
