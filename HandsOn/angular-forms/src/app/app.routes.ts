import { Routes } from '@angular/router';
import { TemplateDrivenDemo1Component } from './template-driven-demo1/template-driven-demo1.component';
import { ReactiveDemo1Component } from './reactive-demo1/reactive-demo1.component';

export const routes: Routes = [
  { path: 'template-demo1', component: TemplateDrivenDemo1Component },
  { path: 'reactive-demo1', component: ReactiveDemo1Component },
];
