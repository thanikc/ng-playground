import { HttpClientModule } from "@angular/common/http";
import { APP_INITIALIZER, ModuleWithProviders, NgModule, Type } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { EffectsModule } from "@ngrx/effects";
import { Store, StoreModule } from "@ngrx/store";
import { filter, tap } from 'rxjs/operators';
import { CommonLibComponent } from "./common-lib.component";
import { CommonLibService } from "./common-lib.service";
import { TruncatePipe } from "./pipes/truncate.pipe";
import { AbstractCustomService, CUSTOM_SERVICE, DefaultCustomService } from "./services/custom.service";
import { FeatureService } from "./services/features.service";
import { GetFeaturesAction } from './store/action/common.actions';
import { CommonEffects } from "./store/effects/common.effects";
import { commonReducer } from "./store/reducer/common.reducers";
import { getFeatures } from './store/selector/common.selectors';
import { CommonState } from './store/state/common.state';

export function initializeApp(store: Store<CommonState>) {
  const featureConfig = (): Promise<any> => {
    store.dispatch(new GetFeaturesAction());
    return new Promise(resolve => store.select(getFeatures).pipe(
      filter(features => !!features),
      tap(features => console.log('features', features))
    ).subscribe(features => resolve(features)));
  }
  return featureConfig;
}

@NgModule({
  declarations: [CommonLibComponent, TruncatePipe],
  imports: [
    HttpClientModule,
    StoreModule.forFeature("common", commonReducer),
    EffectsModule.forFeature([CommonEffects]),
    ReactiveFormsModule
  ],
  providers: [CommonLibService, DefaultCustomService],
  exports: [CommonLibComponent, TruncatePipe]
})
export class CommonLibModule {
  static forRoot(
    CustomService?: Type<AbstractCustomService>
  ): ModuleWithProviders<CommonLibModule> {
    return {
      ngModule: CommonLibModule,
      providers: [
        CommonLibService,
        FeatureService,
        {
          provide: CUSTOM_SERVICE,
          useClass: CustomService || DefaultCustomService
        },
        {
          provide: APP_INITIALIZER,
          useFactory: initializeApp,
          deps: [Store],
          multi: true
        }
      ]
    };
  }
}
