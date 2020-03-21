import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private ngxService: NgxUiLoaderService) { }

  ngOnInit() {
    this.ngxService.start(); // start foreground spinner of the master loader with 'default' taskId
    // Stop the foreground loading after 5s
    setTimeout(() => {
      this.ngxService.stop(); // stop foreground spinner of the master loader with 'default' taskId
    }, 250);
  }

  slides = [
    { img: '../assets/02.jpg' },
    { img: '../assets/03.jpg' },
    { img: '../assets/04.jpg' },
    { img: '../assets/05.jpg' },
    { img: '../assets/06.jpg' },
    { img: '../assets/07.jpg' },
    { img: '../assets/08.jpg' },
    { img: '../assets/09.jpg' },
    { img: '../assets/10 copy.jpg' },
  ];
  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
    autoplay: true,
    autoplaySpeed: 1500,
    infinite: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    cssEase: 'ease-in-out',
    speed: 1000,
    dots: true
  };

  addSlide() {
    this.slides.push({ img: 'http://placehold.it/350x150/777777' });
  }

  removeSlide() {
    // this.slides.length = this.slides.length - 1;
  }

  slickInit(e) {
    // console.log('slick initialized');
  }

  breakpoint(e) {
    // console.log('breakpoint');
  }

  afterChange(e) {
    // console.log('afterChange');
  }

  beforeChange(e) {
    // console.log('beforeChange');
  }

}
