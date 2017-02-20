import { Component, OnInit } from '@angular/core';


declare let $:any;

@Component({
  selector: 'locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {

  constructor(){

    // $('#unionSquare a').on('click', function(markerClick) {
    //   markerClick.preventDefault()
    //   console.log('hi');
    //   $("mark1").click();
    // });

  }

  ngOnInit() {

    $('.aT1').addClass('animated fadeIn');

    $('.aT2').addClass('animated fadeInLeft');

    $('.aT3').addClass('animated fadeInUp');

    $('.aT4').addClass('animated fadeInUp');

    $('.aT5').addClass('animated fadeInUp');


  }

}
