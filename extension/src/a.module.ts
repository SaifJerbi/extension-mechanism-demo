import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentA1 } from './a1.component';
import { ButtonModule } from 'primeng/button';
@NgModule({
  imports: [CommonModule, ButtonModule],
  declarations: [ComponentA1],
  entryComponents: [ComponentA1],
  providers: [
    {
      provide: 'widgets',
      useValue: [
        {
          name: 'component-a1',
          component: ComponentA1
        }
      ],
      multi: true
    }
  ]
})
export default class ModuleA {}
