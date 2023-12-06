import { Routes } from '@angular/router';
import { Demo1Component } from './demo1/demo1.component';
import { DemoComponent } from './demo/demo.component';
import { Demo2Component } from './demo2/demo2.component';
import { Demo4Component } from './demo4/demo4.component';

export const routes: Routes = [
  //adding routes here(a route is a url path of specific component)
  { path: 'demo1', component: Demo1Component },
  { path: 'demo', component: DemoComponent },
  { path: 'demo2', component: Demo2Component },
  { path: 'demo4', component: Demo4Component },
];
