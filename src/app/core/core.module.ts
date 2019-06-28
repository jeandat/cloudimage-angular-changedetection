import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CIConfig, CIModule } from 'ng-cloudimage-responsive';
import { HomeComponent } from './home/home.component';

const ciConfig = {
  token: 'arnknninen',
  baseUrl: 'https://picsum.photos/id/'
};

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, CIModule],
  providers: [{ provide: CIConfig, useValue: ciConfig }],
  exports: [HomeComponent]
})
export class CoreModule {}
