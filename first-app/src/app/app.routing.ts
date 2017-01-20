import { LocComponent } from './location-test/location.component';

// import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const appRoutes: Routes = [
  { path: 'dashboard', component: LocComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(appRoutes);
