import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/core/model/book';
import { UrlService } from 'src/app/core/services/url.service';
import { ActionService } from 'src/app/core/services/action.service';

@Component({
  selector: 'app-catalog-list-item,[app-catalog-list-item]',
  templateUrl: './catalog-list-item.component.html',
  styleUrls: ['./catalog-list-item.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})

export class CatalogListItemComponent implements OnInit {

  @Input() book : Book ;
  constructor(public urlService:UrlService) { }

  ngOnInit() {
  }


}
