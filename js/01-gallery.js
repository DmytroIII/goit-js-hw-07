


import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const paletteContainer = document.querySelector('.gallery');
const galleryImages = createSliderImage(galleryItems);
paletteContainer.innerHTML = galleryImages;

function createSliderImage(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>`;
    }).join('');
}

paletteContainer.addEventListener('click', onImageClick);

function onImageClick(evt) { 
    blockStandartAction(evt);

    if (evt.target.nodeName !== "IMG") { 
        return;
    }

const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`);
instance.show()

paletteContainer.addEventListener("keydown", (evt) => {
    if (evt.code === "Escape") {
        instance.close();
    }
});
    
}

function blockStandartAction(evt) { 
    evt.preventDefault();
}
