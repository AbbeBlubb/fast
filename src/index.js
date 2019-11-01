import '../styles/styles.scss';
import './ImageObserver';
import './OutlineHandler';
import './router';
import smoothscroll from 'smoothscroll-polyfill';
import { Router } from './router';
import { routes } from './routes';


//Polyfill needs to be called in order to make scrollTo.behavior work in all browsers
smoothscroll.polyfill();

// Move router logic for initial page rendering here, when the router is a tidy class
const routerSingleton = new Router(routes);
routerSingleton.loadInitialRoute(window.location.pathname);
