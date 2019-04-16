import { NavigationItem } from '../classes/navigation-item';

const home = new NavigationItem();
  home.icon = 'home'; // TODO: insert home icon
  home.isMobile = true;
  home.route = '/home';
  home.title = 'Home';
  home.type = 'title';
  home.url = 'http://www.juicyjuice1100.com/home';
  home.id = 'button--nav-home';

const about = new NavigationItem();
  about.icon = 'about'; // TODO: insert about icon
  about.isMobile = true;
  about.route = '/about';
  about.title = 'About';
  about.type = 'title';
  about.url = 'http://www.juicyjuice1100.com/about';
  about.id = 'button--nav-about';

export const NavigationConfig: Array<NavigationItem> =  [ home, about ];
