export const tile = (elementIndexNumber, DOMListSize, DBIndexNumber, DBSize) => `
  <li class='tile' id='tile-${elementIndexNumber}'>

    <div class='tile-placeholder'>
      <div class='tile-placeholder__background'>
        <div class='tile-placeholder__vertical-line'></div>
        <div class='tile-placeholder__rectangle-first'></div>
        <div class='tile-placeholder__horizontal-line-second'></div>
        <div class='tile-placeholder__horizontal-line-third'></div>
      </div>
    </div>

    <div class='tile-info'>
      <div class='tile-info__grid'>
        <div class='tile-info__cell-1'>Recyclable DOM element</div>
        <div class='tile-info__cell-2 right bold'>${elementIndexNumber}</div>
        <div class='tile-info__cell-3'>of</div>
        <div class='tile-info__cell-4 right'>${DOMListSize}</div>

        <div class='tile-info__cell-5'>Containing array index item</div>
        <div class='tile-info__cell-6 right bold'><span class='tile-info__index'>${DBIndexNumber}</span></div>
        <div class='tile-info__cell-7'>of</div>
        <div class='tile-info__cell-8 right'>${DBSize}</div>

      </div>
    </div>

  </li>
`;
