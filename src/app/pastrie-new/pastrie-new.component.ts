import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PastrieService } from '../service/pastrie-service.service';
import { Pastrie } from '../model/pastrie';

@Component({
  selector: 'app-pastrie-new',
  templateUrl: './pastrie-new.component.html',
  styleUrls: ['./pastrie-new.component.css']
})
export class PastrieNewComponent implements OnInit {

  pastrie: Pastrie;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: PastrieService
  ) { 
    this.pastrie = new Pastrie();
  }

  ngOnInit(){}

  onSubmit(){
    
    this.pastrie.id = Math.floor((Math.random() * 100) + 1);

    this.service.insertPastrieToDB(this.pastrie).subscribe(() => {
       this.router.navigate(['/pastries']);
    })
  }
}
