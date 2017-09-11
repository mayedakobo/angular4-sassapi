import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {QuoteComponent} from './quote/quote.component';
import { AppComponent }  from './app.component';
import {AppRoutingModule} from './app.routing';

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule],
  declarations: [ AppComponent, QuoteComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }