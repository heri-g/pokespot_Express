import { Component, OnInit } from '@angular/core';

declare let $:any;

@Component({
  selector: 'jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})

export class JobsComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $('.aT').addClass('animated fadeInUp');

    $('.ui.accordion').accordion();

  }

}
