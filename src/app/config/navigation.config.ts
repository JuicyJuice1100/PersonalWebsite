import { NavigationItem } from '../classes/navigation-item';

const about = new NavigationItem();
about.icon = 'home';
about.isMobile = true;
about.route = '/about';
about.title = 'Justin L. Espiritu';
about.type = 'title';
about.url = 'http://www.juicyjuice1100.com/about';

export const NavigationConfig: Array<NavigationItem> =  [ about ];
