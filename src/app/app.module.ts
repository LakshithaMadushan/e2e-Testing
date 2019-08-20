import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SampleOneComponent } from './sample-one/sample-one.component';
import { SampleTwoComponent } from './sample-two/sample-two.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleOneComponent,
    SampleTwoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
