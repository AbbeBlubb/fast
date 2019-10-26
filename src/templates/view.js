import { header} from './header';
import { aboutSection } from './aboutSection';
import { data } from './data';
import { imageSection } from './imageSection';
import { scrollToTop, scrollToTopBtn } from './scrollToTopBtn';


// Add all the template literals into one string
export const HTMLString = header + aboutSection + data + imageSection + scrollToTopBtn;
