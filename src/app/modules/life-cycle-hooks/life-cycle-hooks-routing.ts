import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router'
import { LifeCycleHooksComponent } from 'src/app/components/life-cycle-hooks/life-cycle-hooks-concepts/life-cycle-hooks.component';
import { LifeCycleHooksOrderComponent } from 'src/app/components/life-cycle-hooks/life-cycle-hooks-order/life-cycle-hooks-order.component';
const routes: Routes = [
  {path:"life-cycle-hooks",component:LifeCycleHooksComponent},
  {path:"life-cycle-hooks-order",component:LifeCycleHooksOrderComponent},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LifeCycleHooksRoutingModule { }
