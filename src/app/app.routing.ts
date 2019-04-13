import { AboutComponent } from './components/about/about.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/about',
    pathMatch: 'full'
  },
  {
    path: 'about',
    component: AboutComponent
  },
];

export const AppRoutes = RouterModule.forChild(routes);
