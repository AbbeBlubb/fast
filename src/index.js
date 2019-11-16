import '../styles/styles.scss';
import smoothscroll from 'smoothscroll-polyfill';
import { EventBus } from './event/EventBus';
import { subscriptions } from './event/subscriptions';
import { Router } from './routes/Router';
import { routes } from './routes/routes';
import { ImageObserver } from './templates/lazy/ImageObserver';
import { OutlineHandler } from './OutlineHandler';


//Polyfill needs to be called in order to make scrollTo.behavior work in all browsers
smoothscroll.polyfill();

// Event bus
export const eventBusSingleton = new EventBus(subscriptions);

// Router
const routerSingleton = new Router(routes);
routerSingleton.loadInitialRoute(window.location.pathname);

// IntersectionObserver
export const imageObserverSingleton = new ImageObserver();

// Handle outlines when tabbing and clicking
const outlineHandlerSingleton = new OutlineHandler();
