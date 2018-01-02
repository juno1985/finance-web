import { ItemService, PropertyItem } from './../shared/item.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
@Component({
  selector: 'app-pro-table',
  templateUrl: './pro-table.component.html',
  styleUrls: ['./pro-table.component.css']
})
export class ProTableComponent implements OnInit {

  private props:Observable<PropertyItem[]>
  constructor(private itemService:ItemService) { }

  ngOnInit() {
    this.props=this.itemService.getProp();
  }

}
