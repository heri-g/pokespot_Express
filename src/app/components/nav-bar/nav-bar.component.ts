import { Component, OnInit } from '@angular/core';

declare let $: any;

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() {

    $(document).on('click.nav','.navbar-collapse.in',function(e) {
      if( $(e.target).is('a') ) {
        $(this).removeClass('in').addClass('collapse');
      } else if ($(e.target).is('.nav')) {
        $(this).removeClass('in').addClass('collapse');
      }
    });

  }

  ngOnInit() {

  }

}
