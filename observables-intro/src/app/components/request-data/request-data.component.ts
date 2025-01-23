import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { EMPTY, Observable } from 'rxjs';

@Component({
  selector: 'app-request-data',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './request-data.component.html',
  styleUrl: './request-data.component.css',
})
export class RequestDataComponent implements OnInit {
  private _apiService = inject(ApiService);
  public apiDataFromSubject$: Observable<any> = this._apiService.apiData$;

  public apiDataFromComp$: Observable<any> = EMPTY;

  ngOnInit(): void {}

  getApiData(): void {
    // this._dataService.webCall();
    this.apiDataFromComp$ = this._apiService.webCall();
  }

  getApiDataAndDisplayJson(): void {
    // this._dataService.webCall();
    this._apiService.webCallFillSubject().subscribe((res) => {
      console.log('res', res);
    });
  }

  public clear(): void {
    this._apiService.clearData();
  }
}
