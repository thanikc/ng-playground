import { Component, OnInit } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { filter, map, switchMap, tap } from "rxjs/operators";
import { NcovService } from "./ncov.service";

@Component({
  selector: "app-ncov",
  templateUrl: "ncov.component.html",
  styleUrls: ["ncov.component.scss"]
})
export class NcovComponent implements OnInit {
  country$ = new Subject<string>();
  confirmedCases$: Observable<any[]>;
  errorMessage: string;

  constructor(private ncovService: NcovService) {}

  ngOnInit() {
    this.confirmedCases$ = this.country$.pipe(
      switchMap(country =>
        this.ncovService.getConfirmedCasesByCountry(country)
      ),
      tap(res => {
        this.errorMessage = res.error?.message ?? "";
      }),
      map(obj => obj?.features as Array<any>),
      filter(features => !!features),
      map(features => features.map(f => f.attributes))
    );
  }

  updateCountry(value: string) {
    if (value) {
      this.country$.next(value);
    }
  }

  getDate(timestamp: number) {
    return new Date(timestamp).toISOString();
  }

  getFatalityRate(cases: number, deaths: number): string {
    const percentage = (100 * deaths) / cases;
    const rounded = Math.round(100 * percentage) / 100;
    return `${rounded}%`;
  }
}
