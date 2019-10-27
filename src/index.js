import { HTMLString } from './templates/view';
import '../styles/styles.scss';
import './ImageObserver';
import './OutlineHandler';
import './router';
import smoothscroll from 'smoothscroll-polyfill';


//Polyfill needs to be called in order to make scrollTo.behavior work in all browsers
smoothscroll.polyfill();

// Insert sections in the DOM
document.getElementById('app').insertAdjacentHTML('afterbegin', HTMLString);
