import { NgModule } from '@angular/core';
import { LifeCycleHooksComponent } from 'src/app/components/life-cycle-hooks/life-cycle-hooks-concepts/life-cycle-hooks.component';
import { CommonModule } from '@angular/common';
import { LifeCycleHooksRoutingModule } from './life-cycle-hooks-routing';
import { LifeCycleHooksOrderComponent } from 'src/app/components/life-cycle-hooks/life-cycle-hooks-order/life-cycle-hooks-order.component';
import { AngularMaterialModule } from '../angualr-material/angular-material.module';

const components = [LifeCycleHooksComponent,LifeCycleHooksOrderComponent];
const modules = [ 
    CommonModule,
    LifeCycleHooksRoutingModule
    ,AngularMaterialModule// not good we inpot the same module in CoreModule!!
];

@NgModule({
    declarations:[...components],
    imports:[...modules],
    exports:[...modules,...components]
})

export class LifeCycleHooksModule{

}