import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { Idea } from '@app/models/idea.model';
import { AppState } from '@app/features/idea/state/index';
import { LoadIdeas } from '@app/features/idea/state/idea.action';

@Component({
  selector: 'app-ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.scss']
})
export class IdeasComponent implements OnInit {
  ideas: Observable<Idea[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(new LoadIdeas());
    this.ideas = this.store.select(state => state.ideas.ideas);
  }

}
