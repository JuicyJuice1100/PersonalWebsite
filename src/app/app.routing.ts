import { ModuleWithProviders } from '@angular/core';

import { AboutComponent } from './components/about/about.component';

import { Routes, RouterModule } from '@angular/router';

export const AppRoutes: Routes = [
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

export const Routing: ModuleWithProviders = RouterModule.forRoot(AppRoutes);
