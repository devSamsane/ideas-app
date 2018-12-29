import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { MessageService } from 'primeng/components/common/messageservice';

import { AppState } from '@app/store/app-store.module';
import { SetInitialUser } from '@app/store/actions/auth.action';
import { AuthService } from '@app/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ideas-app';

  constructor(
    private store: Store<AppState>,
    private messageService: MessageService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    if (this.authService.token) {
      this.store.dispatch(new SetInitialUser());
    }
    this.store
      .select((state: AppState) => state.error)
      .subscribe(val => this.showError(val.error));
  }

  showError(err) {
    if (err) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error Message',
        detail: err.message || 'Internal server error'
      });
    }
  }
}
