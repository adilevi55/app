import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router'
import { TypingTestComponent } from 'src/app/components/typing-test/typing-text.component';
const routes: Routes = [
    {path:"type-test",component:TypingTestComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypeTestRoutingModule { }
