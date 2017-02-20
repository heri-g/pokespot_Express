import { Component, OnInit } from '@angular/core';

declare let $:any;

@Component({
  selector: 'faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $('.aT').addClass('animated fadeInUp');

    $('.aTS').addClass('animated fadeIn');

    $('.ui.accordion')
      .accordion();

  }

}
