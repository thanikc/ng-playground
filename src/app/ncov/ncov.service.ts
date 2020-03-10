import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NcovService {
  baseUrl = 'https://services1.arcgis.com/0MSEUqKaxRlEPj5g/arcgis/rest/services/ncov_cases/FeatureServer/1/query?f=json&&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Deaths desc,Country_Region asc,Province_State asc&outSR=102100&resultOffset=0&resultRecordCount=250&cacheHint=true'
  baseQuery= `&where=(Confirmed > 0)`;

  constructor(private http: HttpClient) {}

  getConfirmedCasesByCountry(country: string): Observable<any> {
    const condition = country === '*' ? '' : ` AND (Country_Region='${country}')`;
    const url = `${this.baseUrl}${this.baseQuery}${condition}`;
    return this.http.get(url).pipe(
      tap(res => {
        if(!environment.production) {
          console.log(res);
        }
      })
    );
  }
}