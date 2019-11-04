import { header} from '../templates/header';
import { navigation } from '../templates/navigation';
import { aboutLazy } from '../templates/lazy/aboutLazy';
import { dataLazy } from '../templates/lazy/dataLazy';
import { imageSection } from '../templates/lazy/imageSection';
import { scrollToTopBtn } from '../templates/scrollToTopBtn';


// Add all the template literals into one string
export const HTMLStringLazy = header + navigation + aboutLazy + dataLazy + imageSection + scrollToTopBtn;
