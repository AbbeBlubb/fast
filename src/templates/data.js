import { counter } from '../helpers';


let counterForImageLoader = 0;

export const oneImageHasBeenLoaded = () => {
  counterForImageLoader =  counter(1, counterForImageLoader);
  document.querySelector('.image-count').innerHTML = counterForImageLoader;
};

export const data = `
  <div class='data'>
    Images loaded: <span class='image-count'>0</span>
  </div>
`;
