export interface ViewConfig {
  tabs?: ViewConfig[];
  rows?: ViewConfig[];
  columns?: ViewConfig[];
}

export interface FeatureConfig {
  id: string;
  icon?: string;
  view?: ViewConfig;
}
