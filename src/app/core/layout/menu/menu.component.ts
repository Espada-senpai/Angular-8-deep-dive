import { Component, OnInit } from '@angular/core';
import { UrlService } from '../../services/url.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(public url: UrlService) { }

  ngOnInit() {
   
  }

}
