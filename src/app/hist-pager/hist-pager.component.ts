import { ItemService,HistData } from './../shared/item.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-hist-pager',
  templateUrl: './hist-pager.component.html',
  styleUrls: ['./hist-pager.component.css']
})
export class HistPagerComponent implements OnInit {

  totalPage: number;
  currentPage: number;
  histData:HistData[];
  constructor(private itemService:ItemService) {
    this.currentPage=0; 
    this.changePage(this.currentPage);
   }

  ngOnInit() {
  }

  changePage(pageNum) {
    this.itemService.getHistData(pageNum+1).subscribe(
        res=>{
            this.histData=res.datas;
            this.totalPage=res.totalPage;
        }
    );
    this.currentPage=pageNum;
}

goPrevious(pageNum) {
    if (pageNum >= 1) {
        this.changePage(pageNum - 1);
    }
}

goNext(pageNum) {
    if (pageNum <= this.totalPage - 2) {
        this.changePage(pageNum + 1);
    }
}

}
