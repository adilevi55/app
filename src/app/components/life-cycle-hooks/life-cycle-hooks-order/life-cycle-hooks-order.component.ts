import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-life-cycle-hooks-order',
  templateUrl: './life-cycle-hooks-order.component.html',
  styleUrls: ['./life-cycle-hooks-order.component.css']
})

export class LifeCycleHooksOrderComponent implements OnInit {
  constructor(private _snackBar: MatSnackBar) {}
  lifecycleHooksChange = [
    'ngOnChanges',
    'ngOnInit',
    'ngDoCheck',
    'ngAfterContentInit',
    'ngAfterContentChecked',
    'ngAfterViewInit',
    'ngAfterViewChecked',
    'ngOnDestroy'
  ];
  lifecycleHooksFixed = [
    'ngOnChanges',
    'ngOnInit',
    'ngDoCheck',
    'ngAfterContentInit',
    'ngAfterContentChecked',
    'ngAfterViewInit',
    'ngAfterViewChecked',
    'ngOnDestroy'
  ];
  openSnackBar() {
    let message = ``; 
    for(let i = 0; this.lifecycleHooksFixed.length > i; i++){
      message += `${this.lifecycleHooksFixed[i]} `; 
    }
    this._snackBar.open(message, "exit", {
      duration: 2000,
    });
  }


  ngOnInit(): void {

    this.lifecycleHooksChange.sort(() => Math.random() - 0.5);
  }


  drop(event: CdkDragDrop<string[]>) {
 
    moveItemInArray(this.lifecycleHooksChange, event.previousIndex, event.currentIndex);

      if(JSON.stringify(this.lifecycleHooksChange) === JSON.stringify(this.lifecycleHooksFixed)){
      setTimeout(() =>{
        alert("ok");
        this.lifecycleHooksChange.sort(() => Math.random() - 0.5);
       }, 1000);

    }

  }

}
