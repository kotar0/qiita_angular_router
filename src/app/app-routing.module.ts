import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloComponent } from './hello/hello.component'

const routes: Routes = [
    { path:'', component:HelloComponent},
    { path:'shape', loadChildren:'./shapes/shapes.module#ShapesModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
