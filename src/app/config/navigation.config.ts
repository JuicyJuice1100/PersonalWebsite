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

const portfolio = new NavigationItem();
  portfolio.icon = 'portfolio';
  portfolio.isMobile = true;
  portfolio.route = '/portfolio';
  portfolio.title = 'Resume';
  portfolio.type = 'title';
  portfolio.url = 'http://www.juicyjuice1100.com/portfolio';
  portfolio.id = 'button--nav-portfolio';

const contact = new NavigationItem();
  contact.icon = 'contact';
  contact.isMobile = true;
  contact.route = '/contact';
  contact.title = 'Contact';
  contact.type = 'title';
  contact.url = 'http://www.juicyjuice1100.com/contact';
  contact.id = 'button--nav-contact';

export const NavigationConfig: Array<NavigationItem> =  [ home, about, portfolio, contact ];
