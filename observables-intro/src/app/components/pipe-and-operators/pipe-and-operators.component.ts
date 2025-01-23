import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-pipe-and-operators',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pipe-and-operators.component.html',
  styleUrl: './pipe-and-operators.component.css',
})
export class PipeAndOperatorsComponent implements OnInit {
  private _dataService = inject(DataService);
  public dataStream$: Observable<number> = this._dataService.dataStream$;
  public resultArr: number[] = [] as number[];

  ngOnInit(): void {
    this.fillRegularArray();
    // this.fillBehaviorSubject();
  }

  public fillRegularArray(): void {
    this._dataService.getDataAndManipulate().subscribe((res) => {
      // console.log('home component result from getDataAndManipulate():', res);
      this.resultArr.push(res);
    });
  }
}
