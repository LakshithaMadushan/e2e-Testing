import { AppPage } from './app.po';

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
		expect(page.getLoremText()).toBeTruthy();
		expect(page.getLoremText()).toBe('Lorem Ipsum is simply dummy text of the printing and typesetting industry.');
	});

	it('should hide Lorem Para when click button one', () => {});
});
