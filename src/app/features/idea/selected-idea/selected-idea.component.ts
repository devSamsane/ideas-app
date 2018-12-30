import { Component, OnInit, OnDestroy } from '@angular/core';

import { Store } from '@ngrx/store';

import { AppState } from '@app/features/idea/state/index';
import { selectCurrentIdea } from '../state/idea.selector';
import { Subscription } from 'rxjs';
import { Idea } from '@app/models/idea.model';

@Component({
  selector: 'app-selected-idea',
  templateUrl: './selected-idea.component.html',
  styleUrls: ['./selected-idea.component.scss']
})
export class SelectedIdeaComponent implements OnInit, OnDestroy {
  private subscription$: Subscription;
  idea: Idea;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.subscription$ = this.store.select(selectCurrentIdea).subscribe(val => this.idea = val);
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }

}
