import { ModuleWithProviders, NgModule, Type } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CommonLibComponent } from './common-lib.component';
import { CommonLibService } from './common-lib.service';
import { TruncatePipe } from './pipes/truncate.pipe';
import { AbstractCustomService, CUSTOM_SERVICE, DefaultCustomService } from './services/custom.service';
import { CommonEffects } from './store/effects/common.effects';
import { commonReducer } from './store/reducer/common.reducers';

@NgModule({
  declarations: [CommonLibComponent, TruncatePipe],
  imports: [
    StoreModule.forFeature('common', commonReducer ),
    EffectsModule.forFeature([CommonEffects]),
    ReactiveFormsModule
  ],
  providers: [CommonLibService, DefaultCustomService],
  exports: [CommonLibComponent, TruncatePipe]
})
export class CommonLibModule {
  static forRoot(CustomService?: Type<AbstractCustomService>): ModuleWithProviders {
    return {
      ngModule: CommonLibModule,
      providers: [ 
        CommonLibService,
        { provide: CUSTOM_SERVICE, useClass: CustomService || DefaultCustomService }
      ]
    };
  }
}
