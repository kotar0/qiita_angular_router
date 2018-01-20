import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShapesRoutingModule } from './shapes-routing.module';

import { ShapeComponent } from '../shape/shape.component'
import { RectangleComponent } from '../rectangle/rectangle.component'
import { CircleComponent } from '../circle/circle.component'


@NgModule({
  imports: [
    CommonModule,
    ShapesRoutingModule
  ],
  declarations: [
      ShapeComponent,
      RectangleComponent,
      CircleComponent
  ]
})
export class ShapesModule { }
