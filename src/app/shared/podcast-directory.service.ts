import { Injectable } from '@angular/core';
import { AngularFireDatabase, SnapshotAction } from '@angular/fire/database';
import { catchError, map, shareReplay } from 'rxjs/operators';
import { Podcast } from './podcast';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PodcastDirectoryService {
  constructor(private afd: AngularFireDatabase) {}

  getPodcasts() {
    return this.afd
      .object('podcast1')
      .snapshotChanges()
      .pipe(
        map((action: SnapshotAction<any>) => {
          const $key = action.payload.key;
          const data = { $key, ...action.payload.val() };
          return data;
        })
        // map((val: SnapshotAction<Podcast>[]) => {
        //   return val.map((action: SnapshotAction<Podcast>) => {
        //     const $key = action.payload.key;
        //     return { $key, ...action.payload.val() };
        //   });
        // })
      );
  }
}
