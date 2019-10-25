import { HTMLString } from './templates/view';
import '../styles/styles.scss';
import './imageObserver';


// Insert sections in the DOM
document.getElementById('app').insertAdjacentHTML('afterbegin', HTMLString);
