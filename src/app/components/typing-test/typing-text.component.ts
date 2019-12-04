import { Component, OnInit } from '@angular/core';
import { Words } from 'src/app/models/words';

@Component({
  selector: 'app-typing-text',
  templateUrl: './typing-text.component.html',
  styleUrls: ['./typing-text.component.css']
})
export class TypingTestComponent implements OnInit {
  
  words = new Words([]);

    wordsList:string[] = [
      "string","class","component","console.log",
      "typescript","angular material","model",
      "models","module","modules","templateUrl",
      "template","styleUrls","styles","constructor",
      "HttpClient","import","Component","@Component",
      "selector","export","class","false",
      "NgModule","declarations","providers",
      "Schematics","bootstrap","RouterModule",
      "BrowserModule","Routes","redirectTo","pathMatch",
      "routes","forRoot","forChild",
      "routerLink","ng-container","private",
      "ngOnInit","OnInit","implements",
      "public","href","app-root",
      "CommonModule","FormsModule",
  ]
  constructor() { }

  ngOnInit() {
    for(let i = 0;this.wordsList.length > i;i++){
      this.words.name.push("");
    }
  }

}
