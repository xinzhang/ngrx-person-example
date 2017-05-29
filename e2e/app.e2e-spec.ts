import { NgrxPersonPage } from './app.po';

describe('ngrx-person App', () => {
  let page: NgrxPersonPage;

  beforeEach(() => {
    page = new NgrxPersonPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
