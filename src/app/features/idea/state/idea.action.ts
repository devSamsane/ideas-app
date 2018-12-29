import { Action } from '@ngrx/store';

import { Idea } from '@app/models/idea.model';

export enum IdeaActions {
  LOAD_IDEAS = '[Idea] Load Idea',
  LOAD_IDEAS_SUCCESS = '[Idea] Load Idea Success'
}

export class LoadIdeas implements Action {
  readonly type = IdeaActions.LOAD_IDEAS;
}

export class LoadIdeasSuccess implements Action {
  readonly type = IdeaActions.LOAD_IDEAS_SUCCESS;
  constructor(public payload: Idea[]) { }
}

export type Action = LoadIdeas | LoadIdeasSuccess;
