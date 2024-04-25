import { AfterViewInit, CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, Input, ViewChild} from '@angular/core';

@Component({
  selector: 'app-swiper',
  standalone: true,
  imports: [],
  templateUrl: './swiper.component.html',
  styleUrl: './swiper.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SwiperComponent implements AfterViewInit{
  @Input() maxImages:number = 4;
  @Input() minImages:number = 1;
  @Input() images:string[] = [];
  @ViewChild('swiper') swiperContainer!: ElementRef;
  swiperEl  = this.swiperContainer?.nativeElement;

  ngAfterViewInit(): void {
    this.swiperEl = this.swiperContainer.nativeElement;
    const swiperParams = {
      slidesPerView: 1,
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 0
        },
        1024: {
          slidesPerView: this.maxImages,
        },
      },
      on: {
        init() {
          // ...
        },
      },
    };
    Object.assign(this.swiperEl, swiperParams);
    // Inicializa el swiper
    this.swiperEl.initialize();
  }
    
  next(){
    this.swiperEl.swiper.slideNext();
  }
  back(){
    this.swiperEl.swiper.slidePrev();
  }
}
