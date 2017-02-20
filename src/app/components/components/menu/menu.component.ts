import {Component, OnInit, AfterViewInit} from '@angular/core';

declare let $:any;

@Component({
  selector: 'poke-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {

      $('.aT').addClass('animated fadeInUp');

      $('.aTS').addClass('animated fadeIn');


    // BLURS IMAGE BACKGROUND WHEN HOVERING OVER CARDS
    // $('.special.cards .image').dimmer({
    //   on: 'hover'
    // });
    // END OF CARD BLUR

    // INITIALIZES MODAL ON CLICK OF ADD TO CART BUTTON
    // $("#twoPopular").on("click", function(){
    //   $('.ui.modal.one')
    //     .modal('setting', 'transition', 'vertical flip')
    //     .modal('toggle');
    // });
    //
    // $("#threePopular").on("click", function(){
    //   $('.ui.modal.two')
    //     .modal('setting', 'transition', 'vertical flip')
    //     .modal('show');
    // });
    //
    // $("#ahiTunaPopular").on("click", function(){
    //   $('.ui.modal.three')
    //     .modal('setting', 'transition', 'vertical flip')
    //     .modal('show');
    // });
    //
    // $("#misoSpicyPopular").on("click", function(){
    //   $('.ui.modal.four')
    //     .modal('setting', 'transition', 'vertical flip')
    //     .modal('show');
    // });
    //
    // $("#twoBowl").on("click", function(){
    //   $('.ui.modal.five')
    //     .modal('setting', 'transition', 'vertical flip')
    //     .modal('show');
    // });
    //
    // $("#threeBowl").on("click", function(){
    //   $('.ui.modal.six')
    //     .modal('setting', 'transition', 'vertical flip')
    //     .modal('show');
    // });
    //
    // $("#avocadoBoat").on("click", function(){
    //   $('.ui.modal.seven')
    //     .modal('setting', 'transition', 'vertical flip')
    //     .modal('show');
    // });
    //
    // $("#spicySalmon").on("click", function(){
    //   $('.ui.modal.eight')
    //     .modal('setting', 'transition', 'vertical flip')
    //     .modal('show');
    // });
    //
    // $("#ahiTunaBowl").on("click", function(){
    //   $('.ui.modal.nine')
    //     .modal('setting', 'transition', 'vertical flip')
    //     .modal('show');
    // });
    //
    // $("#misoSpicyBowl").on("click", function(){
    //   $('.ui.modal.ten')
    //     .modal('setting', 'transition', 'vertical flip')
    //     .modal('show');
    // });
    //
    // $("#citrusFresh").on("click", function(){
    //   $('.ui.modal.eleven')
    //     .modal('setting', 'transition', 'vertical flip')
    //     .modal('show');
    // });
    //
    // $("#teriyakiSurfAndTurf").on("click", function(){
    //   $('.ui.modal.twelve')
    //     .modal('setting', 'transition', 'vertical flip')
    //     .modal('show');
    // });
    //
    // $("#sesameTofu").on("click", function(){
    //   $('.ui.modal.thirteen')
    //     .modal('setting', 'transition', 'vertical flip')
    //     .modal('show');
    // });
    //
    // $("#pokespotSpecial").on("click", function(){
    //   $('.ui.modal.fourteen')
    //     .modal('setting', 'transition', 'vertical flip')
    //     .modal('show');
    // });
    //
    // $("#chips").on("click", function(){
    //   $('.ui.modal.fifteen')
    //     .modal('setting', 'transition', 'vertical flip')
    //     .modal('show');
    // });
    //
    // $("#crabGuacamole").on("click", function(){
    //   $('.ui.modal.sixteen')
    //     .modal('setting', 'transition', 'vertical flip')
    //     .modal('show');
    // });
    //
    // $("#misoSoup").on("click", function(){
    //   $('.ui.modal.seventeen')
    //     .modal('setting', 'transition', 'vertical flip')
    //     .modal('show');
    // });
    //
    // $("#kaniSalad").on("click", function(){
    //   $('.ui.modal.eighteen')
    //     .modal('setting', 'transition', 'vertical flip')
    //     .modal('show');
    // });
    //
    // $("#seaweedSalad").on("click", function(){
    //   $('.ui.modal.nineteen')
    //     .modal('setting', 'transition', 'vertical flip')
    //     .modal('show');
    // });
    //
    // $("#softDrinks").on("click", function(){
    //   $('.ui.modal.twenty')
    //     .modal('setting', 'transition', 'vertical flip')
    //     .modal('show');
    // });
    // END OF MODAL FUNCTIONS

      // $('.ui.checkbox')
    //   .checkbox()
    // ;


  }

  ngAfterViewInit(){

  }



}
