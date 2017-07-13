import { AngularTestPagePage } from './app.po';

describe('angular-test-page App', () => {
  let page: AngularTestPagePage;

  beforeEach(() => {
    page = new AngularTestPagePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
