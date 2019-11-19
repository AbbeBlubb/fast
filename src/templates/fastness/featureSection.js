export const featureSection = `
  <section class='feature-section' role='contentinfo' aria-label='xxx' id='content'>

    <article>
      <h2>Features</h2>

      <p>
        The aim of this project is to give the fastest possible experience.
        Some of the features are:
      </p>

      <ul>
        <li>
          The project is built in <span class='bold'>plain JavaScript</span>, meaning the code is as lightweight it can be -
          thus avoiding the need for the client to load a framework.
          You can look at all the files in the inspector source tab, select webpack.
        </li>
        <li>
          For this reason, I built my own <span class='bold'>routing</span> and <span class='bold'>event bus</span>.
        </li>
        <li>
          The image loader uses intersection observer to <span class='bold'>load images as they are needed</span>,
          thus avoiding to load unnessesary content.
          You can follow the loading in the inspector network tab.
        </li>
        <li>
          The infinite scroll uses intersection observer to re-calculate the position of the elements cluster and to update the content of the elements;
          a <span class='bold'>recycling of the elements</span>.
          This way the DOM constantly only contains 20 elements - light and fast to process, in contrast to having a very large DOM full of content.
          The user is given a seamless scrolling experience.
          You can follow the recycling in the inspector elements panel.
        </li>
        <li>
          Webpack is configured for development and production.
          The configuration includes <span class='bold'>code-splitting</span> and <span class='bold'>bundle name hashing</span>,
          to optimize browser caching, and <span class='bold'>image compression</span>.
        </li>
      </ul>

      <p>
        All this gives the user a <span class='bold'>fast-loading experience with minimum of code loading and processing</span>.
        The project is responsive and built as mobile first.
      </p>

      <p>
        Focus has also been given to <span class='bold'>accessibility</span> and user friendliness.
        The page is tabbable and listens to tab and mouse events to give specific styling properties.
      </p>
    </article>

    <article>
      <h2>Event bus</h2>

      <p>
        The publishing and subscribed modules interacs through the event bus,
         instead of interacting directly with each other.
        This way the application scales better.
      </p>

      <img
        class='feature-section__image'
        src=${require('../..//assets/event-bus.png')}
        title='The event bus'
        alt='Schema over the event bus'
      >
    </article>

    <article>
      <h2>Router</h2>
      <img
        class='feature-section__image'
        src=${require('../../assets/router.png')}
        title='The rotuer'
        alt='Schema over the router'
      >
    </article>

    <article>
      <h2>Code splitting and compression</h2>
      <img
        class='feature-section__image'
        src=${require('../../assets/webpack.png')}
        title='Webpack'
        alt='Schema over the webpack bundeling'
      >
    </article>

  </section>
`;
