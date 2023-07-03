// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

const listElLightBox = document.querySelector('.gallery');
listElLightBox.insertAdjacentHTML('afterbegin', addImg(galleryItems));
listElLightBox.style.listStyle = 'none';

function addImg(arr) {
    return arr.map(({ preview, original, description }) =>
        `<li class="gallery__item" >
        <a class="gallery__link" href=${original}>
            <img class="gallery__image" src=${preview} alt=${description}/>
        </a>
    </li>`).join('')
}

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});