import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { LifeCycleHooksModule } from '../life-cycle-hooks/life-cycle-hooks.module';
import { AngularMaterialModule } from '../angualr-material/angular-material.module';
import { TypingTestModule } from '../typing-test/typing-test.module';
import { PageNotFoundComponent } from 'src/app/components/page-not-found/page-not-found.component';

const components = [
    PageNotFoundComponent
        ];
const moudles = [
    CommonModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    AngularMaterialModule,
    LifeCycleHooksModule,
    TypingTestModule,
]
@NgModule({
    declarations: [...components],
    imports: [...moudles],
    exports: [...moudles,...components],
})
export class CoreMoudle { }