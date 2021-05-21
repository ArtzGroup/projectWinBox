import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OutputComponent } from './output/output.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: '*', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'output', component: OutputComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
