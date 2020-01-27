import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FeatureConfig } from '../models/feature-config';

const FEATURE_CONFIG_URL = '/assets/features.json'

@Injectable({
  providedIn: 'root'
})
export class FeatureService {
  constructor(private http: HttpClient) {}

  getFeatureConfig(): Observable<FeatureConfig[]> {
    return this.http.get(FEATURE_CONFIG_URL).pipe(map(res => res['payload']));
  }
}