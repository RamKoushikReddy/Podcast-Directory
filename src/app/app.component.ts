
import {Component } from '@angular/core'
import { ServiceService} from './service.service'
import { podcast } from './podcast';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'Podcast-Directory';
  description = 'Add your favourate podcast link in the below form';

podcast1 : Observable<podcast>

  constructor(private service: ServiceService) { }
  
  ngOninit() { 
    this.service.getmethod().subscribe(podcast1 => {
      console.log(podcast1);
    })
  }
  }
   

 
