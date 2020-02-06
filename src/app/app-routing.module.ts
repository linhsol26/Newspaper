import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{ path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
{ path: 'details/:name', loadChildren: () => import('./pages/details/details.module').then(m => m.DetailsModule) },
{ path: '**', pathMatch: 'full',
 loadChildren: () => import('./pages/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
