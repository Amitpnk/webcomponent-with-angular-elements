import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './Main/app.component';
import { MessageComponent } from './SimpleMessage/message.component';
import { SelectComponent } from './SimpleSelect/select.component';

@NgModule({
  declarations: [
    AppComponent, MessageComponent, SelectComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
