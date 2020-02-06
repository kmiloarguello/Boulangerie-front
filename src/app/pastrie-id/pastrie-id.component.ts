import { Component, OnInit } from '@angular/core';
import { Pastrie } from '../model/pastrie';
import { PastrieService } from '../service/pastrie-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PastrieListComponent } from '../pastrie-list/pastrie-list.component';

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-pastrie-id',
  templateUrl: './pastrie-id.component.html',
  styleUrls: ['./pastrie-id.component.css']
})
export class PastrieIdComponent implements OnInit {

  pastrie: Pastrie;

  constructor( private service: PastrieService ,private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    this.service.getPastrieById(parseInt(id)).subscribe(data => {
      this.pastrie = data;
    });

  }

  removePastrieById(id: number){
    this.service.removePastrieById(id)
      .subscribe(data => {
        this.router.navigate(['/pastries']);
      })
  }


}
