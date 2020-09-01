import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { ServiceService} from './service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Podcast-Directory';
  description = 'Add your favourate podcast link in the below form';



  constructor(private service: ServiceService) { }
  
  ngOninit() {
    this.service.getmethod().subscribe(podcast1 => { 
      console.log(podcast1);
    })
   }

 
}