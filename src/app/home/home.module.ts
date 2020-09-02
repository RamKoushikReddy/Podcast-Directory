import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule} from '@angular/material/card';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { ServiceService} from '.././shared/service.service';
// Material Modules

import { MatButtonModule } from '@angular/material/button';
import { AngularFirestore } from 'angularfire2/firestore';

@NgModule({
  providers:[ServiceService ,AngularFirestore],
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatExpansionModule, MatFormFieldModule, MatInputModule, MatListModule
  ,MatSelectModule,MatNativeDateModule,MatToolbarModule,MatIconModule,ReactiveFormsModule,FormsModule,MatCardModule],
})
export class HomeModule {}
