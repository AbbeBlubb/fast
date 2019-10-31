import { header} from '../templates/header';
import { navigation } from '../templates/navigation';
import { aboutSectionLazy } from '../templates/aboutSectionLazy';
import { dataLazy } from '../templates/dataLazy';
import { imageSection } from '../templates/imageSection';
import { scrollToTopBtn } from '../templates/scrollToTopBtn';


// Add all the template literals into one string
export const HTMLStringLazy = header + navigation + aboutSectionLazy + dataLazy + imageSection + scrollToTopBtn;
