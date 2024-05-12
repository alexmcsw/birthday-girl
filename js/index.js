import {Wheel} from 'https://cdn.jsdelivr.net/npm/spin-wheel@4.3.2/dist/spin-wheel-esm.js';

window.onload = () => {

  const props = {
    image: './img/example-0-image.svg',
    overlayImage: './img/example-0-overlay.svg',
    items: [
      {
        label: 'lord of the rings',
      },
      {
        label: 'upsidedown',
      },
      {
        label: 'hotdog universe from EEAO',
      },
      {
        label: 'idea 4',
      },
    ],
  };

  const container = document.querySelector('.wheel-wrapper');

  window.wheel = new Wheel(container, props);

};