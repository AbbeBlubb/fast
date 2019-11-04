import { header} from '../templates/header';
import { navigation } from '../templates/navigation';
import { aboutSectionFastness } from '../templates/fastness/aboutSectionFastness';
import { dataFastness } from '../templates/fastness/dataFastness';
import { featureSection } from '../templates/fastness/featureSection';
import { scrollToTopBtn } from '../templates/scrollToTopBtn';


// Add all the template literals into one string
export const HTMLStringFastness = header + navigation + aboutSectionFastness + dataFastness + featureSection + scrollToTopBtn;
