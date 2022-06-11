import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
// import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';
import { NgxEventCalendarModule } from 'ngx-event-calendar';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpService } from './providers/http.service';
import { ENV } from 'environments/environment-variables.token';
import { environment } from 'environments/environment';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    // MenuAdminModule,
    NgxEventCalendarModule,
    NgbModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    // ComponentsModule,
    ExamplesModule,
    AppRoutingModule,
    NoopAnimationsModule,
  ],
  providers: [
    HttpService,
    { provide: ENV, useValue: environment },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
