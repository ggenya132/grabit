import { GrabItPage } from './app.po';

describe('grab-it App', () => {
  let page: GrabItPage;

  beforeEach(() => {
    page = new GrabItPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
