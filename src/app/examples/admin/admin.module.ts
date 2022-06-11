import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatStepperModule, } from '@angular/material/stepper';

@NgModule({
    imports: [
        CommonModule,
        MatCardModule,
        FormsModule,
        MatStepperModule,
        // NgxLoadingModule.forRoot({
        //     animationType: ngxLoadingAnimationTypes.circle,
        //     backdropBackgroundColour: 'rgba(255,255,255,0.3)',
        //     backdropBorderRadius: '10px',
        //     primaryColour: '##645cfb',
        //     secondaryColour: '#645cfb',
        //     tertiaryColour: '#ffffff' }),
    ],
    declarations: [AdminComponent],
    providers: [],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})

export class AdminModule {}
