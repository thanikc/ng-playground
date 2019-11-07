import { Component, OnInit } from "@angular/core";
import { CommonLibService } from 'common-lib';
import { Observable } from 'rxjs';

@Component({
  selector: 'app1-ext-common-lib',
  templateUrl: './extension.component.html',
  styleUrls: ['./extension.component.css']
})
export class ExtensionComponent implements OnInit {

  readOnly$: Observable<boolean> = this.commonService.getReadOnly();

  constructor(private commonService: CommonLibService) {}

  ngOnInit() {}
}