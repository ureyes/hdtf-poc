import { HdtfPocClientPage } from './app.po';

describe('hdtf-poc-client App', () => {
  let page: HdtfPocClientPage;

  beforeEach(() => {
    page = new HdtfPocClientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
