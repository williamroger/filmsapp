import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from '../pipes/pipes.module';
import { SlideshowBackdropComponent } from './slideshow-backdrop/slideshow-backdrop.component';
import { SlideshowPosterComponent } from './slideshow-poster/slideshow-poster.component';
import { SlideshowPairsComponent } from './slideshow-pairs/slideshow-pairs.component';

@NgModule({
  declarations: [
    SlideshowBackdropComponent,
    SlideshowPosterComponent,
    SlideshowPairsComponent
  ],
  exports: [
    SlideshowBackdropComponent,
    SlideshowPosterComponent,
    SlideshowPairsComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ]
})
export class ComponentsModule { }
