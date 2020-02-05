import { Component, OnInit } from '@angular/core';
import { Pastrie } from '../model/pastrie';
import { PastrieService } from '../service/pastrie-service.service';

@Component({
  selector: 'app-pastrie-list',
  templateUrl: './pastrie-list.component.html',
  styleUrls: ['./pastrie-list.component.css']
})
export class PastrieListComponent implements OnInit {

  private pastries: Pastrie[];

  constructor(private pastrieService: PastrieService) {
   }

  ngOnInit() {
    this.pastrieService.getAllPastries().subscribe((data) => {
      this.pastries = data;
    });
  }

}
