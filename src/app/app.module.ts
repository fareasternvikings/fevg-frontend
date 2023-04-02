import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { TuiRootModule, TuiDialogModule, TuiAlertModule, TUI_SANITIZER } from "@taiga-ui/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {StoreModule} from '@ngrx/store'
import {EffectsModule} from '@ngrx/effects'
import {StoreDevtoolsModule} from '@ngrx/store-devtools'
import {environment} from '../environments/environment'
import {StoreRouterConnectingModule} from '@ngrx/router-store'
import {AuthModule} from './auth/auth.module'
import {HTTP_INTERCEPTORS} from '@angular/common/http'
import {AuthInterceptor} from './shared/services/auth-interceptor.service'
import {IndexModule} from "./index/index.module";

@NgModule({
  declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AuthModule.forRoot(),
        StoreModule.forRoot({}, {}),
        EffectsModule.forRoot([]),
        environment.production
            ? []
            : StoreDevtoolsModule.instrument({
                maxAge: 25,
                logOnly: environment.production,
            }),
        StoreRouterConnectingModule.forRoot(),
        BrowserAnimationsModule,
        TuiRootModule,
        TuiDialogModule,
        TuiAlertModule,
        IndexModule
    ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
      {provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}
],
  bootstrap: [AppComponent],
})
export class AppModule {}
