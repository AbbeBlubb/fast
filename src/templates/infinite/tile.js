export const tile = (indexNumber, DOMListSize) => `
  <li class='tile-placeholder' id='tile-${indexNumber}'>
    <div class='tile-placeholder__background'>
      <div class='tile-placeholder__vertical-line'></div>
      <div class='tile-placeholder__rectangle-first'>Recyclable DOM element ${indexNumber} of ${DOMListSize}<br>Showing index item X of 200</div>
      <div class='tile-placeholder__horizontal-line-second'></div>
      <div class='tile-placeholder__horizontal-line-third'></div>
    </div>
  </li>
`;
