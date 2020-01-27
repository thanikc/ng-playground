import { FeatureConfig } from '../../models/feature-config';

export interface CommonState {
  readOnlyMode: boolean;
  features: FeatureConfig[];
}