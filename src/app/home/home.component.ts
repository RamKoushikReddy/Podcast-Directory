import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service'
import { podcast } from '../podcast';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  podcast1: Observable<podcast[]>;
  constructor(private service: ServiceService) { }

  ngOnInit(): void 
  {
    this.service.getmethod().subscribe(podcast1 => {
      console.log(podcast1);
    })
  }

}
