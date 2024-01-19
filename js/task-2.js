const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
  {
    url:
      'https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Elephant Beside on Baby Elephant',
  },
  {
    url:
      'https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Blue Geeen and Orange Parrot',
  },
  {
    url:
      'https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Zebras on Zebra',
  },
];
 
const gallery = document.querySelector('.gallery');

gallery.style.display = 'flex';
gallery.style.flexWrap = 'wrap';
gallery.style.justifyContent = 'space-around';
gallery.style.alignItems = 'center';
gallery.style.gap = '48px 24px';

const markup = images.map((image) => {
  return `<li class="gallery-item"><img class="gallery-img" src=${image.url} alt="${image.alt}"style="width: 360px; height: 300px;"></li>`
}).join("");
gallery.insertAdjacentHTML("beforeend", markup);

const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach(item => {
  item.style.listStyleType = 'none';
  item.style.flex = 'calc(100%/3 - 48px)';
});
const galleryImages = document.querySelectorAll('.gallery-img');
galleryImages.forEach(img => {
  img.style.width = '100%'; 
  img.style.height = '100%'; 
});
