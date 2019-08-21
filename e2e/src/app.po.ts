import { browser, by, element } from 'protractor';

export class AppPage {
	navigateTo() {
		return browser.get('/');
	}

	getContainerText() {
		return element(by.css('app-sample-one h3')).getText();
	}

	isPresentLoremTag() {
		return element(by.css('app-sample-one .lorem-para')).isPresent();
	}

	getLoremText() {
		return element(by.css('app-sample-one .lorem-para')).getText();
	}

	clickButtonOne() {
		browser.sleep(2000);
		element(by.css('app-sample-one .component-one-button')).click();
	}

	getSampleFormComponent() {
		return element(by.css('app-sample-form'));
	}

	inputModelNameElement() {
		return this.getSampleFormComponent().element(by.css('#nameInput'));
	}

	submitButtonElement() {
		return this.getSampleFormComponent().element(by.css('.component-form-button'));
	}
}
