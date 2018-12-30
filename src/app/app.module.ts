import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { AuthService } from '@app/services/auth.service';
import { ApiService } from '@app/services/api.service';
import { AppStoreModule } from '@app/store/app-store.module';
import { AuthComponent } from '@app/components/auth/auth.component';
import { UIModule } from '@app/ui.module';
import { NavbarComponent } from '@app/components/navbar/navbar.component';
import { UUIDGuard } from '@app/services/uuid.guard';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    NavbarComponent
  ],
  imports: [
    AppRoutingModule,
    AppStoreModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    UIModule
  ],
  providers: [
    AuthService,
    ApiService,
    UUIDGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
