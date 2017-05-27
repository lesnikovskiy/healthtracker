import { SportoholicPage } from './app.po';

describe('sportoholic App', () => {
  let page: SportoholicPage;

  beforeEach(() => {
    page = new SportoholicPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
