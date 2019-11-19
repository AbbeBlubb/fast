## Dev server
- npm run devbuild; builds without contenthash, thus making the webpack dev server work properly
- npm start
- npm run build; builds with contenthash aimed for deploy


## Features

Webpack
- Config for dev and prod
- webpack dev server
- Babel
- SCSS
- Caching: code splitting, bundle content hash
- Image compression

JS
- IntersectionObserve: lazy-loading and infinite scroll with recycling
- Markup logic with template literals
- Handler for outline when user is tabbing or clicking
- Routing: iniial page on URL request, pushState for DOM buttons, popstate for reacting on URL change and change DOM elements. Specific features for Github static pages
- Event bus: Publish to an event type, subscribe to the subscription object

CSS
- Image fade-in animation
- Scroll button animation

Other
- SonarLint
- BEM

Want to do:
- Url-loader (base 64; will disable the cashing functionality)
- System.import() for module routing
- manifest.json


<p>⚡ Lazy-loading and code splitting ⚡</p>


Powershell:
Copy-Item -Path "C:\Users\alber\Documents\fast\build\*" -Destination "C:\Users\alber\Documents\fast\docs" -Recurse

Linux: will not overwrite files, so need to delete the files in the docs folder first
cp -r build/* docs/
