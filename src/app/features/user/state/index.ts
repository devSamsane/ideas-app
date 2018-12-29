import { User } from '@app/models/user.model';
import * as Store from '@app/store/app-store.module';


export interface UserState {
  users: User[];
  loading: boolean;
  loaded: boolean;
}

export interface AppState extends Store.AppState {
  users: UserState;
}
