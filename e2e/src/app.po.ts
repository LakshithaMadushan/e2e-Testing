import { browser, by, element } from 'protractor';

export class AppPage {
	navigateTo() {
		return browser.get('/');
	}

	getContainerText() {
		return element(by.css('app-sample-one h3')).getText();
	}

	getLoremText() {
		return element(by.css('app-sample-one .lorem-para')).getText();
	}
}
