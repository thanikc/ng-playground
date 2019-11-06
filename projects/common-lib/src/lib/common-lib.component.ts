import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonLibService } from './common-lib.service';

@Component({
  selector: 'lib-common-lib',
  templateUrl: './common-lib.component.html',
  styles: []
})
export class CommonLibComponent implements OnInit {

  form: FormGroup;

  constructor(private service: CommonLibService, private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({ readOnly: false });

    const control = this.form.get('readOnly');

    control.valueChanges.subscribe(readOnly => {
      this.service.setReadOnly(readOnly);
    });

    this.service.getReadOnly().subscribe(readOnly => {
      control.setValue(readOnly, { emitEvent: false });
    });
  }

}
