import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SampleOneComponent } from './sample-one/sample-one.component';
import { SampleTwoComponent } from './sample-two/sample-two.component';
import { SampleFormComponent } from './sample-form/sample-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
	declarations: [ AppComponent, SampleOneComponent, SampleTwoComponent, SampleFormComponent ],
	imports: [ BrowserModule, FormsModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
