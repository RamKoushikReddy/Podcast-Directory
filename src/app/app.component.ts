import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Podcast-Directory';
  description = 'Add your favourate podcast link in the below form';

  itemValue = '';
  items: Observable<any[]>;

  constructor(public db: AngularFireDatabase) { }

 
}