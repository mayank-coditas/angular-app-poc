import { Action } from '@ngrx/store';

export enum AppActionTypes {
  Update = 'UPDATE'
}

export const UPDATE = 'UPDATE';

export class Update implements Action {
  readonly type = UPDATE;
  constructor(public payload: any) {}
}

export type AppActions = Update;
