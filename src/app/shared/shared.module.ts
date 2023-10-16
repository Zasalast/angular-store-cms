import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
/* import { SwiperModule } from 'swiper/angular'; */

import { ReversePipe } from './pibes/reverse.pipe';
import { TimeAgoPipe } from './pibes/time-ago.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { ImgComponent } from './components/img/img.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    ImgComponent,
    ProductComponent,
    ProductsComponent,
    ReversePipe,
    TimeAgoPipe,
    HighlightDirective,

  ],
  imports: [
    CommonModule,
    RouterModule,

    /* ,
    SwiperModule */
  ],
  exports: [
    ImgComponent,
    ProductComponent,
    ProductsComponent,
    ReversePipe,
    TimeAgoPipe,
    HighlightDirective,
  ]
})
export class SharedModule { }