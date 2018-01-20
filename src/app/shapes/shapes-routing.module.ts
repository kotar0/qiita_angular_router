import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShapeComponent } from '../shape/shape.component'
import { RectangleComponent } from '../rectangle/rectangle.component'
import { CircleComponent } from '../circle/circle.component'


const routes: Routes = [
    { path:'', component:ShapeComponent,
        children:[
            { path:'rectangle', component:RectangleComponent },
            { path:'circle', component:CircleComponent }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShapesRoutingModule { }
