import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { UIModule } from '@app/ui.module';
import { IdeasComponent } from '@app/features/idea/ideas/ideas.component';
import { ideaReducer } from '@app/features/idea/state/idea.reducer';
import { IdeaEffects } from '@app/features/idea/state/idea.effects';
import { IdeaComponent } from './ideas/idea/idea.component';
import { SelectedIdeaComponent } from '@app/features/idea/selected-idea/selected-idea.component';
import { IdeaResolver } from '@app/features/idea/idea.resolver';
import { UUIDGuard } from '@app/services/uuid.guard';

const routes: Routes = [
  { path: '', component: IdeasComponent },
  { path: ':id', component: SelectedIdeaComponent, canActivate: [UUIDGuard], resolve: { data: IdeaResolver } }
];

@NgModule({
  declarations: [IdeasComponent, IdeaComponent, SelectedIdeaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UIModule,
    StoreModule.forFeature('ideas', ideaReducer),
    EffectsModule.forFeature([IdeaEffects])
  ],
  exports: [RouterModule],
  providers: [IdeaResolver]
})
export class IdeaModule { }
