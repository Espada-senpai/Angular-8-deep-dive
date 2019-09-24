import { By,element } from 'protractor';

export class CatalogListPage{

    getRows(){
        return element.all(By.css('tr[app-catalog-list-item]'));
    }

    getRowsCount() {
        return this.getRows().count();
    }

    getAtRow(index:number, selector:string){
        return this.getRows()
        .get(index)
        .element(By.css(selector))
    }

    getAuthor(index:number){
        return this.getAtRow(index,'.row-author').getText();
    }
}