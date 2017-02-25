import { ChromeExtensionPage } from './app.po';

describe('chrome-extension App', function() {
  let page: ChromeExtensionPage;

  beforeEach(() => {
    page = new ChromeExtensionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
