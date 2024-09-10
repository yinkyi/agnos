export interface AbdominalProps {
  isShow: boolean;
  labelPosition?: string;
  labelImage: string;
  highlighImage: string;
  selectedAllArea: boolean;
}

export interface PainInitialState {
  abdominal: Record<string, boolean>;
  finger: Record<string, boolean>;
}

export interface ReduxInitialState {
  pain: PainInitialState;
}
