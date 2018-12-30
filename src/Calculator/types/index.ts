export interface State {
  operandOne: string,
  operandTwo: string,
  operator: string
}

export interface Result {
  result: string
}

export interface StateHook {
  state: State,
  dispatch: (newState: any) => void
}