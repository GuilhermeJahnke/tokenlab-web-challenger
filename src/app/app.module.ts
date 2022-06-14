import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ExamplesModule } from './examples/examples.module';
import { NgxEventCalendarModule } from 'ngx-event-calendar';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpService } from './providers/http.service';
import { ENV } from 'environments/environment-variables.token';
import { environment } from 'environments/environment';
import { HttpClientModule } from '@angular/common/http';
import localePt from '@angular/common/locales/pt';
import { DatePipe, registerLocaleData } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';

registerLocaleData(localePt);
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    NgxEventCalendarModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-right'
    }),
    NgbModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    ExamplesModule,
    AppRoutingModule,
    NoopAnimationsModule,
  ],
  providers: [
    DatePipe,
    HttpService,
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    { provide: ENV, useValue: environment },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
