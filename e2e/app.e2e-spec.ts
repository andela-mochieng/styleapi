import { StyleapiPage } from './app.po';

describe('styleapi App', function() {
  let page: StyleapiPage;

  beforeEach(() => {
    page = new StyleapiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
