import { Component, OnInit } from "@angular/core";
import { Observable, Subject } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { NcovService } from './ncov.service';

@Component({
  selector: 'app-ncov',
  templateUrl: 'ncov.component.html',
  styleUrls: ['ncov.component.scss']
})
export class NcovComponent implements OnInit {
  country$ = new Subject<string>();
  confirmedCases$: Observable<any>;

  constructor(private ncovService: NcovService){}

  ngOnInit() {
    this.confirmedCases$ = this.country$.pipe(
      switchMap(country => this.ncovService.getConfirmedCasesByCountry(country).pipe(
        map(obj => obj.features as Array<any>),
        map(features => features.find(f => f.attributes.Country_Region === country))
      )),
      filter(index => !!index.attributes),
      map(index => index.attributes),
    );
  }

  updateCountry(value: string) {
    this.country$.next(value);
  }

  getDate(timestamp: number) {
    return new Date(timestamp);
  }
}