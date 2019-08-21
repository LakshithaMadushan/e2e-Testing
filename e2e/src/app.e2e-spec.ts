import { AppPage } from './app.po';
import { browser } from 'protractor';

describe('workspace-project App', () => {
	let page: AppPage;

	beforeEach(() => {
		page = new AppPage();
	});

	it('should display sample-one works!', () => {
		page.navigateTo();
		expect(page.getContainerText()).toEqual('sample-one works!');
	});

	it('should display Lorem Para', () => {
		expect(page.isPresentLoremTag()).toBeTruthy();
		expect(page.getLoremText()).toBeTruthy();
		expect(page.getLoremText()).toBe('Lorem Ipsum is simply dummy text of the printing and typesetting industry.');
	});

	it('should hide and show Lorem Para when click button one', () => {
		page.clickButtonOne();
		expect(page.isPresentLoremTag()).toBeFalsy();

		page.clickButtonOne();
		expect(page.isPresentLoremTag()).toBeTruthy();
	});

	it('name input should render', () => {
		expect(page.getSampleFormComponent().isPresent()).toBeTruthy();
	});

	it('name input should be working', () => {
		const input = page.inputModelNameElement();
		input.sendKeys('abcdefgh');
		expect(input.getAttribute('value')).toBe('abcdefgh');
		browser.sleep(2000);
		page.submitButtonElement().click();
		expect(input.getAttribute('value')).toBe('abcdefgh'.toUpperCase());
		browser.sleep(5000);
	});
});
