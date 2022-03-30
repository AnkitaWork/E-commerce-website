//External imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Internal imports
import { ProductComponent } from './product/product.component';
const routes: Routes = [
  {
    path: '',
    component: ProductComponent
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
