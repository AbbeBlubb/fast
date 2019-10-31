import '../styles/styles.scss';
import './ImageObserver';
import './OutlineHandler';
import './router';
import smoothscroll from 'smoothscroll-polyfill';


//Polyfill needs to be called in order to make scrollTo.behavior work in all browsers
smoothscroll.polyfill();

// Move router logic for initial page rendering here, when the router is a tidy class
