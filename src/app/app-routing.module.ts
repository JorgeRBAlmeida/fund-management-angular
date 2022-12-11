import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  { path: '',
    //canActivate: [AuthGuard],
    loadChildren: () => import('./pages/funds/funds.module').then((m) => m.FundsModule)
  },
  {
    path: 'page-404',
    component: NotFoundComponent,
    //canActivate: [AuthGuard],
  },
  {
    path: '**',
    redirectTo: 'page-404',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
