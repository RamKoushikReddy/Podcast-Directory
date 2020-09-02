import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { PodcastDirectoryService } from '../../shared/podcast-directory.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  allPodcasts: Observable<any[]>;

  constructor(private pd: PodcastDirectoryService) {}

  ngOnInit(): void {
    this.allPodcasts = this.pd.getPodcasts().pipe(tap(console.log));
    
  }
}

// this.pd.getPodcasts().subscribe((val) => {
//   this.allPodcasts = val;
// });
