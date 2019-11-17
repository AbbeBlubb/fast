export const featureSection = `
  <section class='feature-section' role='contentinfo' aria-label='xxx' id='content'>

    <h2>Features</h2>

    <p>
      The aim of this project is to give the fastest possible experience.
      Some of the features are:
    </p>

    <ul>
      <li>
        The project is built in plain JavaScript, meaning the code is as lightweight it can be -
        thus avoiding the need for the client to load a framework.
      </li>
      <li>
        For this reason, I built my own routing and an event bus.
      </li>
      <li>
        The image loader uses intersection observer to load images as they are needed,
        thus avoiding to load unnessesary content.
        You can follow the loading in the inspector network tab.
      </li>
      <li>
        The infinite scroll uses intersection observer to re-calculate the position of the elements cluster and to update the content of the elements.
        This way the DOM only contains 20 elements - light and fast to process, in contrast to having a very large DOM full of content.
        The user is given a seamless scrolling experience.
        You can follow the recycling in the inspector elements panel.
      </li>
      <li>
        Webpack is configured for development and production.
        The configuration includes code-splitting to facilitate browser caching.
      </li>
    </ul>

    <p>
      All this gives the user a fast-loading experience with minimum of code loading and processing.
      The project is responsive and built as mobile first.
    </p>

  </section>
`;
