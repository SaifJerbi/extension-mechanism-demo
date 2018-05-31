import { NgModule } from '@angular/core';
import { CaAppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [BrowserModule, CommonModule, ButtonModule],
  declarations: [CaAppComponent],
  bootstrap: [CaAppComponent]
})
export class AppModule {}
