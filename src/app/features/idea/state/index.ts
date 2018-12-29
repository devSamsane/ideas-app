import { Idea } from '@app/models/idea.model';
import * as Store from '@app/store/app-store.module';

export interface IdeaState {
  ideas: Idea[];
  loading: boolean;
  loaded: boolean;
}

export interface AppState extends Store.AppState {
  ideas: IdeaState;
}
