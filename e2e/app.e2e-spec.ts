import { NativeCmpPage } from './app.po';

describe('native-cmp App', () => {
  let page: NativeCmpPage;

  beforeEach(() => {
    page = new NativeCmpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
