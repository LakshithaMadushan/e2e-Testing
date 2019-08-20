import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-sample-two',
	templateUrl: './sample-two.component.html',
	styleUrls: [ './sample-two.component.css' ]
})
export class SampleTwoComponent implements OnInit {
	myName = 'Lakshitha Madushan';

	constructor() {}

	ngOnInit() {}

	buttonTwo() {
		console.log('button two clicked !!!');
		this.myName = 'Buddy';
	}
}
