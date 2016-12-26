import { Routes, RouterModule } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { UserComponentComponent } from './user-component/user-component.component';
import { RouteGuard } from './route-guard';

export const APP_ROUTES : Routes = [
  { path:"", component: HomeComponentComponent },
  { path:"users", component: UserComponentComponent, canActivate: [RouteGuard] }
];

export const routing = RouterModule.forRoot(APP_ROUTES);