import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreMoudle } from './modules/core/core.module';
import { HeaderComponent } from 'src/app/components/root-app/header/header.component';
import { HomeComponent } from 'src/app/components/root-app/home/home.component';
import { MainComponent } from 'src/app/components/main/main.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreMoudle

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
