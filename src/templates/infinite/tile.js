export const tile = indexNumber => `
  <li class='target-placeholder' id='tile-${indexNumber}'>
    <div class='target-placeholder__background'>
      <div class='target-placeholder__vertical-line'></div>
      <div class='target-placeholder__rectangle-first'>${indexNumber}</div>
      <div class='target-placeholder__horizontal-line-second'></div>
      <div class='target-placeholder__horizontal-line-third'></div>
    </div>
  </li>
`;
