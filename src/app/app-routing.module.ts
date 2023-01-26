import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormPageComponent } from './views/form-page/form-page.component';
import { ListPageComponent } from './views/list-page/list-page.component';

const routes: Routes = [
  {
    path: '',
    component: FormPageComponent
  },
  {
    path: 'list',
    component: ListPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
