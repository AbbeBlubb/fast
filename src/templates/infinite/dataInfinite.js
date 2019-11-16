import { counter } from '../../helpers';


let counterForRecycling = 0;

export const oneRecyclingHasBeenDone = () => {
  counterForRecycling =  counter(1, counterForRecycling);
  document.querySelector('.recycling-count').innerHTML = counterForRecycling;
};

export const resetCounterForRecycling = () => {
  counterForRecycling = 0;
};

export const dataInfinite = `
  <div class='data' id='data'>
    Times recycled: <span class='recycling-count'>0</span>
    Padding/height?
  </div>
`;
