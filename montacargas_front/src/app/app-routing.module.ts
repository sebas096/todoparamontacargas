import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/selling/home/home.component';

const routes: Routes = [
  {   path : 'login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule) },
  {   path : 'products', loadChildren: () =>  import('./modules/selling/selling.module').then(m => m.SellingModule )},
  {   path : 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule) },
  { path: '**' , component:HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



