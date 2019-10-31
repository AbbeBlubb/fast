import { header} from '../templates/header';
import { navigation } from '../templates/navigation';
import { aboutSectionFastness } from '../templates/aboutSectionFastness';
// Content
import { scrollToTopBtn } from '../templates/scrollToTopBtn';


// Add all the template literals into one string
export const HTMLStringFastness = header + navigation + aboutSectionFastness + scrollToTopBtn;
