import { Inject, Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMapTo, tap } from 'rxjs/operators';
import { AbstractCustomService, CUSTOM_SERVICE } from '../../services/custom.service';
import { FeatureService } from '../../services/features.service';
import { CommonActionTypes, GetFeaturesAction, GetFeaturesSuccessAction, SetReadonlyModeAction, SetReadonlyModeSuccessAction } from '../action/common.actions';

@Injectable()
export class CommonEffects {

  @Effect()
  setReadonly$ = this.actions$.pipe(
    ofType<SetReadonlyModeAction>(CommonActionTypes.SetReadonlyMode),
    map(action => action.payload),
    tap(payload => this.customService.notify('SetReadonlyModeAction', String(payload.readOnly))),
    map(_ => new SetReadonlyModeSuccessAction())
  );

  @Effect()
  getFeatures$ = this.actions$.pipe(
    ofType<GetFeaturesAction>(CommonActionTypes.GetFeatures),
    switchMapTo(this.featureService.getFeatureConfig()),
    map(features => new GetFeaturesSuccessAction({features}))
  );

  constructor(private actions$: Actions, @Inject(CUSTOM_SERVICE) private customService: AbstractCustomService, private featureService: FeatureService) {}
}