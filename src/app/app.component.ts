import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { FeatureConfig } from 'common-lib/lib/services/features.service';
import { getFeatures } from 'projects/common-lib/src/lib/store/selector/common.selectors';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "ng-playground";

  features$: Observable<FeatureConfig[]>;

  constructor(private store: Store<any>, private router: Router) {}

  ngOnInit() {
    this.features$ = this.store.select(getFeatures);
  }

  auth() {
    const redirectUri = encodeURIComponent(environment.oauth_callbackUri);
    const resource = encodeURIComponent(environment.oauth_resourceUri);
    window.location.href = `${environment.oauth_uri}/authorize?response_type=code&client_id=${environment.oauth_clientId}&redirect_uri=${redirectUri}&resource=${resource}`;
  }

  capitalize(text: string): string {
    return text.replace(/^\w/, c => c.toUpperCase());
  }

  routeTo(path: string) {
    this.router.navigateByUrl(path);
  }

}
