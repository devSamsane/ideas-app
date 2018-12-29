import { createFeatureSelector, createSelector } from '@ngrx/store';

import { IdeaState } from './index';
import { Entity } from '../../../models/entity.model';
import { Idea } from '../../../models/idea.model';

export const selectIdeaState = createFeatureSelector<IdeaState>('ideas');

export const selectAllIdeas = createSelector(
  selectIdeaState,
  (ideaState: IdeaState) => {
    const { ideas }: {ideas: Entity<Idea>} = ideaState;
    return Object.keys(ideas).map(id => ideas[id]);
  }
);
