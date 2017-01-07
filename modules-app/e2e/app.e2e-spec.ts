import { ModulesAppPage } from './app.po';

describe('modules-app App', function() {
  let page: ModulesAppPage;

  beforeEach(() => {
    page = new ModulesAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
