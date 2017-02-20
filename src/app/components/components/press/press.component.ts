import { Component, OnInit } from '@angular/core';

declare let $:any;

@Component({
  selector: 'press',
  templateUrl: './press.component.html',
  styleUrls: ['./press.component.css']
})
export class PressComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $('.aT').addClass('animated fadeInUp');

    $('.aTS').addClass('animated fadeIn');

    $('.special.column .image').dimmer({
      on: 'hover'
    });

  }

}
