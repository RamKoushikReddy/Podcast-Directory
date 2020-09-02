import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Podcast } from '../../shared/podcast';
import { PodcastDirectoryService } from '../../shared/podcast-directory.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  allPodcasts: Observable<Podcast[]>;

  constructor(private pd: PodcastDirectoryService) {}

  ngOnInit(): void {
    // this.pd.getPodcasts().subscribe((val) => {
    //   this.allPodcasts = val;
    // });
    this.allPodcasts = this.pd.getPodcasts().pipe(tap(console.log));
    
  }
}
