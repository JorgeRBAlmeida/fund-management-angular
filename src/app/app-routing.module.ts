import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FundosModule } from './fundos/fundos.module';

const routes: Routes = [
  { path: '',
    loadChildren: () => import('./fundos/fundos.module').then((m) => m.FundosModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
