import { AngdemoCallWebApiPage } from './app.po';

describe('angdemo-call-web-api App', function() {
  let page: AngdemoCallWebApiPage;

  beforeEach(() => {
    page = new AngdemoCallWebApiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
