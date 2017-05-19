import { GwReservePage } from './app.po';

describe('gw-reserve App', () => {
  let page: GwReservePage;

  beforeEach(() => {
    page = new GwReservePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
