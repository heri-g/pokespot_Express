import { Component, OnInit } from '@angular/core';

declare let $:any;

@Component({
  selector: 'app-franchise',
  templateUrl: './franchise.component.html',
  styleUrls: ['./franchise.component.css']
})
export class FranchiseComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $('.ui.radio.checkbox')
      .checkbox();

  }

}
