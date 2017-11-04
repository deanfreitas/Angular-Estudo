import { ProjetoAngularPage } from './app.po';

describe('projeto-angular App', () => {
  let page: ProjetoAngularPage;

  beforeEach(() => {
    page = new ProjetoAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
