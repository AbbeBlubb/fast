import { header} from '../templates/header';
import { navigation } from '../templates/navigation';
import { aboutSectionInfinite } from '../templates/aboutSectionInfinite';
import { dataInfinite } from '../templates/dataInfinite';
import { scrollSection } from '../templates/scrollSection';
import { scrollToTopBtn } from '../templates/scrollToTopBtn';


// Add all the template literals into one string
export const HTMLStringInfinite = header + navigation + aboutSectionInfinite + dataInfinite + scrollSection + scrollToTopBtn;
