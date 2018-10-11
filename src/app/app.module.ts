import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
