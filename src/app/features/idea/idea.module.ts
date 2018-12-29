import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { UIModule } from '@app/ui.module';
import { IdeasComponent } from '@app/features/idea/ideas/ideas.component';
import { ideaReducer } from '@app/features/idea/state/idea.reducer';
import { IdeaEffects } from '@app/features/idea/state/idea.effects';

const routes: Routes = [
  {path: '', component: IdeasComponent }
];

@NgModule({
  declarations: [IdeasComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UIModule,
    StoreModule.forFeature('ideas', ideaReducer),
    EffectsModule.forFeature([IdeaEffects])
  ],
  exports: [RouterModule]
})
export class IdeaModule { }
