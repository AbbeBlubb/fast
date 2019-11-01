import { header} from '../templates/header';
import { navigation } from '../templates/navigation';
import { aboutSectionFastness } from '../templates/aboutSectionFastness';
import { dataFastness } from '../templates/dataFastness';
import { featureSection } from '../templates/featureSection';
import { scrollToTopBtn } from '../templates/scrollToTopBtn';


// Add all the template literals into one string
export const HTMLStringFastness = header + navigation + aboutSectionFastness + dataFastness + featureSection + scrollToTopBtn;
