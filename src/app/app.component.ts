import { Component } from "@angular/core";
import { environment } from 'src/environments/environment';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "ng-playground";

  auth() {
    const redirectUri = encodeURIComponent(environment.oauth_callbackUri);
    const resource = encodeURIComponent(environment.oauth_resourceUri);
    window.location.href = `${environment.oauth_uri}/authorize?response_type=code&client_id=${environment.oauth_clientId}&redirect_uri=${redirectUri}&resource=${resource}`;
  }

}
