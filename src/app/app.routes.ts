import { Routes } from '@angular/router';
import { HomeComponent} from './pages/admin/admin.component'
import { AdminComponent } from './pages/home/home.component'


export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  }
];
