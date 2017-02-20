import { Component, OnInit } from '@angular/core';

declare let $:any;

@Component({
  selector: 'catering',
  templateUrl: './catering.component.html',
  styleUrls: ['./catering.component.css']
})
export class CateringComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $('.aT').addClass('animated fadeInUp');

    $('.aTS').addClass('animated fadeIn');

  }

}
