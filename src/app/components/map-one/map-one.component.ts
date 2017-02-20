import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-one',
  templateUrl: './map-one.component.html',
  styleUrls: ['./map-one.component.css']
})
export class MapOneComponent implements OnInit {

  lat: number = 40.733012;
  lng: number = -73.990233;
  zoom: number = 15;

  constructor() { }

  ngOnInit() {
  }

}
