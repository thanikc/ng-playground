import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonLibComponent } from './common-lib.component';
import { StoreModule } from '@ngrx/store';
import { commonReducer } from './store/reducer/common.reducers';
import { ReactiveFormsModule } from '@angular/forms'
import { CommonLibService } from './common-lib.service';

@NgModule({
  declarations: [CommonLibComponent],
  imports: [
    StoreModule.forRoot({ common: commonReducer }),
    ReactiveFormsModule
  ],
  providers: [CommonLibService],
  exports: [CommonLibComponent]
})
export class CommonLibModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CommonLibModule,
      providers: [ CommonLibService ]
    };
  }
}
