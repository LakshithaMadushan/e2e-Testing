import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-sample-one',
	templateUrl: './sample-one.component.html',
	styleUrls: [ './sample-one.component.css' ]
})
export class SampleOneComponent implements OnInit {
	showLorem = true;

	constructor() {}

	ngOnInit() {}

	buttonOne() {
		console.log('button one clicked !!!');
		this.showLorem = !this.showLorem;
	}
}
