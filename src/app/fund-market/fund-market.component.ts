import { Component, OnInit, signal } from '@angular/core';
import { HealthCheckService } from '../services/health-check.service';
import { AsyncPipe, JsonPipe } from '@angular/common';
import {
  BehaviorSubject,
  concatMap,
  from,
  interval,
  map,
  mergeMap,
  zip,
} from 'rxjs';

@Component({
  selector: 'app-fund-market',
  standalone: true,
  imports: [JsonPipe, AsyncPipe],
  templateUrl: './fund-market.component.html',
  styleUrl: './fund-market.component.scss',
})
export class FundMarketComponent implements OnInit {
  values: Array<string> = [];
  fundValue$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  currentFundValue:string='';

  constructor(private healthService: HealthCheckService) {}

  ngOnInit(): void {
    this.healthService
      .getHealthStatus()
      .pipe(
        map((data:any)=>  data.d?.liveNavList[0]?.values),
        mergeMap((values: any) => {
          this.values = values;
          return interval(1000);
        }),
        map((i) => this.values[i])
      )
      .subscribe((data: any) => {
           this.fundValue$.next(data.Value)
      });
  }
}
