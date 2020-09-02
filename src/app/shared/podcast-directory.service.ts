import { Injectable } from '@angular/core';
import { AngularFireDatabase, SnapshotAction } from '@angular/fire/database';
import { catchError, map, shareReplay } from 'rxjs/operators';

import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PodcastDirectoryService {
  constructor(private afd: AngularFireDatabase) {}

  getPodcasts() {
    return this.afd
      .list('podcast1')
      .snapshotChanges()
      .pipe(
        map((val: SnapshotAction<any>[]) => {
          return val.map((action: SnapshotAction<any>) => {
            const $key = action.payload.key;
            return { $key, ...action.payload.val() };
          });
        })
        // map((action: SnapshotAction<any>) => {
        //   const $key = action.payload.key;
        //   const data = { $key, ...action.payload.val() };
        //   return data;
        // })
      );
  }
}
