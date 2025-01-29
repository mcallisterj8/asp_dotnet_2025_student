import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private _http = inject(HttpClient);
  // Filling the BehaviorSubject with initial value
  private _apiDataSubject: BehaviorSubject<any> = new BehaviorSubject<any>(
    null
  );

  public apiData$: Observable<any> = this._apiDataSubject.asObservable();

  constructor() {}

  public get apiData(): any {
    return this._apiDataSubject.value;
  }

  public webCall(): Observable<any> {
    // console.log('IN WEB CALL');
    return this._http.get<any>(`https://randomuser.me/api`);
  }

  public webCallFillSubject(): Observable<any> {
    return this._http.get<any>(`https://randomuser.me/api`).pipe(
      tap((data) => {
        // Taking the data from the API and placing it into the BehaviorSubject.
        this._apiDataSubject.next(data);
      })
    );
  }

  public clearData(): void {
    this._apiDataSubject.next(null);
  }
}
