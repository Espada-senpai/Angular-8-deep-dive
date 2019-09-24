import { AppPage } from './app.po';
import { browser, logging } from 'protractor';
import {CatalogListPage} from './catalog-list.po'

describe('Bookstore', () => {
  let page: AppPage;
  let catalogListPage = new CatalogListPage();

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should display title', () => {
    expect(page.getTitleText()).toEqual('Bookstore');
  });

  it('should display a book lise', () => {
    browser.sleep(50000); 
    expect(catalogListPage.getRowsCount()).toBeGreaterThan(3);
  });

  it('should add a new item to cart', () => {
    expect(catalogListPage.getAuthor(0)).toContain('Alain');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
