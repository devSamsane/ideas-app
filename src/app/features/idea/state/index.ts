import { Idea } from '@app/models/idea.model';

import * as Store from '@app/store/app-store.module';
import { Entity } from '@app/models/entity.model';

export interface IdeaState {
  ideas: Entity<Idea>;
  loading: boolean;
  loaded: boolean;
  selectedIdea?: string;
}

export interface AppState extends Store.AppState {
  ideas: IdeaState;
}
