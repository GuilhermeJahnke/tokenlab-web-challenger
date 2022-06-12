import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LandingComponent } from './landing/landing.component';
import { SignupComponent } from './signup/signup.component';
import { CalendarComponent } from './calendar/calendar.component';
import { NgxEventCalendarModule } from 'ngx-event-calendar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AdminComponent } from './admin/admin.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list'; 
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { ChooseServiceComponent } from './chooseService/chooseService.component';
import { ModalEventsComponent } from './modalEvents/modalEvents.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        FlexLayoutModule,
        NgxEventCalendarModule,
        NgbModule,
        MatSidenavModule,
        MatListModule,
        RouterModule  
    ],
    declarations: [
        CalendarComponent,
        ChooseServiceComponent,
        ModalEventsComponent,
        UserComponent,
        AdminComponent,
        LandingComponent,
        SignupComponent,
        LoginComponent
    ],
})
export class ExamplesModule { }
