import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { filter, from, map, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private _http = inject(HttpClient);

  public dataStream$: Observable<number> = from([10, 11, 12, 13, 14, 15, 16]);

  public data$: Observable<number[]> = of([10, 11, 12, 14, 15, 16]);

  constructor() {}

  public getDataStream(): Observable<number> {
    return this.dataStream$;
  }

  public webCall(): Observable<any> {
    console.log('IN WEB CALL');
    return this._http.get<any>(`https://randomuser.me/api`);
  }

  public getAllData(): Observable<number[]> {    
    return this.data$;
  }

  public getDataAndManipulate(): Observable<number> {
    return this.dataStream$.pipe(
      tap((val) => {
        console.log('tap initial:', val);
        
      }),
      map((val) => {
        console.log('---------------------------------');
        console.log('map initial:', val);
        const retVal = val + 2;
        console.log('map retVal:', retVal);

        return retVal;
      }),
      filter((val) => {
        console.log('---------------------------------');
        console.log('filter initial:', val);
        console.log('=================================');
        return val % 2 == 0;
      })
    );
  }
}
