import { Component, OnInit } from '@angular/core';
import { Pastrie } from '../model/pastrie';
import { PastrieService } from '../service/pastrie-service.service';
import simpleParallax from 'simple-parallax-js';

@Component({
  selector: 'app-pastrie-list',
  templateUrl: './pastrie-list.component.html',
  styleUrls: ['./pastrie-list.component.css']
})
export class PastrieListComponent implements OnInit {

  pains: Pastrie[];
  biscuits: Pastrie[];
  pastries: Pastrie[];

  slideConfig = {
    "slidesToShow": 3,
    "slidesToScroll": 1,
    "nextArrow":"<div class='nav-btn next-slide'></div>",
    "prevArrow":"<div class='nav-btn prev-slide'></div>",
    "dots": true,
    "infinite": false
  };

  constructor(private pastrieService: PastrieService) {
   }

  ngOnInit() {

    this.pastrieService.getPastrieByType("pastrie").subscribe(data => this.pastries = data );
    this.pastrieService.getPastrieByType("biscuit").subscribe(data => this.biscuits = data);
    this.pastrieService.getPastrieByType("pain").subscribe(data => this.pains = data );

    var images = document.querySelectorAll('img.bg-section-head');
    
    new simpleParallax(images[0]);
    new simpleParallax(images[1]);
    new simpleParallax(images[2]);
  }

  updateListPastrieRender(type: string){
    this.pastries.pop();
  }

  removePastrieById(id: number){
    this.pastrieService.removePastrieById(id)
      .subscribe(data => {
        this.ngOnInit();
      })
  }
  
}
