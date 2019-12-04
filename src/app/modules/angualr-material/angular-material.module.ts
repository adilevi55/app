import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FlexLayoutModule } from '@angular/flex-layout';

import {
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    
  } from '@angular/material';
  
const modules = [
  CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatCardModule,
    MatExpansionModule,
    MatAutocompleteModule,
    DragDropModule,
    MatSnackBarModule,
    FlexLayoutModule
    
];
@NgModule({
  imports: [...modules],
  exports:[...modules]
})
export class AngularMaterialModule { }
