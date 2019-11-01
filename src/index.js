import '../styles/styles.scss';
import smoothscroll from 'smoothscroll-polyfill';
import { Router } from './router';
import { routes } from './routes';
import { ImageObserver } from './ImageObserver';
import { OutlineHandler } from './OutlineHandler';


//Polyfill needs to be called in order to make scrollTo.behavior work in all browsers
smoothscroll.polyfill();

// Router
const routerSingleton = new Router(routes);
routerSingleton.loadInitialRoute(window.location.pathname);

// IntersectionObserver
const imageObserverSingleton = new ImageObserver();

// Handle outlines when tabbing and clicking
const outlineHandlerSingleton = new OutlineHandler();
