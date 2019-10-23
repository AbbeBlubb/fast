import 'intersection-observer';
import { HTMLString } from './HTMLString';
import '../styles/stylesheet.css';
import './imageObserver';


// Insert sections in the DOM
document.getElementById('app').insertAdjacentHTML('afterbegin', HTMLString);
