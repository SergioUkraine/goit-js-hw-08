// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const galleryCards = createGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryCards);

function createGalleryMarkup(pictures) {
    return pictures
        .map(({ preview, original, description }) => {
            return `
            <li style ="list-style: none" class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img 
                        class="gallery__image" 
                        src="${preview}" 
                        alt="${description}" 
                    />
                </a>
            </li>
            `; 
        })
        .join("");
}

const lightboxGallary = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
    captionPosition: "bottom",
});
