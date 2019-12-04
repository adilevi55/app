import { NgModule } from '@angular/core';
import { TypingTestComponent } from 'src/app/components/typing-test/typing-text.component';
import { TypeTestRoutingModule } from './typing-test-routing';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../angualr-material/angular-material.module';

@NgModule({
    declarations:[TypingTestComponent],
    imports:[TypeTestRoutingModule,CommonModule,FormsModule
    
        ,AngularMaterialModule// not good we inpot the same module in CoreModule!!
],
    exports:[CommonModule ,TypeTestRoutingModule,TypingTestComponent]
})
export class TypingTestModule{}