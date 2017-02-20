import {Component, OnInit } from '@angular/core';

declare let $:any;

@Component({
  selector: 'front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {

    $('.carousel-heading').addClass('animated fadeInUp');

    $(document).ready(function(){
      $("#awesomeCarousel").carousel({
        interval :500,
        pause: false
      });
    });

  }
}
