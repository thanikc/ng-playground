import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { environment } from 'src/environments/environment';

export interface TokenInfo {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  token_type: string;
}

@Component({
  selector: "app-callback",
  templateUrl: "./callback.component.html",
  styleUrls: ["./callback.component.scss"]
})
export class CallbackComponent implements OnInit {
  tokenInfo: TokenInfo;
  error: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.route.queryParams.subscribe(params => {
      if (params.code) {
        this.token(params.code);
      }
    });
  }

  ngOnInit() {}

  token(code: string) {
    const uri = "/oauth2/token";
    const redirectUri = encodeURIComponent(environment.oauth_callbackUri);
    const resource = encodeURIComponent(environment.oauth_resourceUri);
    const body = `grant_type=authorization_code&redirect_uri=${redirectUri}&client_id=${environment.oauth_clientId}&code=${code}&resource=${resource}`;
    const headers = {
      "Content-Type": "application/x-www-form-urlencoded"
    };
    this.http.post(uri, body, { headers }).subscribe((res: TokenInfo) => {
      this.tokenInfo = res;
    }, error => {
      this.error = error.error;
    });
  }

  logToken() {
    console.log(this.tokenInfo);
  }
}
