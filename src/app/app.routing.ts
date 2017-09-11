import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {QuoteComponent} from './quote/quote.component';

export const routes: Routes = [
  {
    path: '',
    component: QuoteComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
