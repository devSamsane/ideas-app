import { IdeaState } from '@app/features/idea/state/index';
import { Action, IdeaActions } from '@app/features/idea/state/idea.action';

const initialState: IdeaState = {
  loaded: false,
  loading: false,
  ideas: {}
};

export const ideaReducer: (state: IdeaState, action: Action) => IdeaState = (state = initialState, action) => {
  switch (action.type) {
    case IdeaActions.LOAD_IDEAS:
      return { ...state, loaded: false, loading: true };
    case IdeaActions.LOAD_IDEAS_SUCCESS:
      const ideas = action.payload.reduce((accumulator, idea) => ({
        ...accumulator, [idea.id]: idea
      }), state.ideas);
      return { ...state, ideas: ideas, loaded: true, loading: false };
    default:
      return state;
  }
};
