import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BallsComponent } from './components/balls/balls.component';
import { BalanceRComponent } from './components/balance-r/balance-r.component';

@NgModule({
  declarations: [
    AppComponent,
    BallsComponent,
    BalanceRComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
