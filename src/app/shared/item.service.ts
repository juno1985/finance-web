import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { DialogService, BuiltInOptions } from "ngx-bootstrap-modal";
@Injectable()
export class ItemService {


  constructor(private http:Http, public dialogService:DialogService) { 

  }

  getInputFlow():Observable<InputFlow>{
    return this.http.get("/finance-api/getInputFlow").map(res=>res.json());
  }

  postInputFlow(inputPost:InputPost){
    // console.log("得到: "+ inputPost.fromItem + ' ' +inputPost.toItem + ' '+inputPost.tranAccount);
    return this.http.post('/finance-api/postInputFlow',inputPost).subscribe(
      res=>{
        //.json()函数会将string转化为object
        // console.log("得到的状态码: " + res.json().mesg);
        this.dialogService.show(<BuiltInOptions>{
          content: '保存成功',
          icon: 'success',
          size: 'sm',
          timeout: 1000,
          showCancelButton: false,
          showCloseButton:false,
          showConfirmButton:false
      });
      }
    );
  }

}

export class InputItem{
  constructor(
    public id:number,
    public itemName:string,
    public itemType:string
  ){}
}

export class PropertyItem{
  constructor(
    public id:number,
    public itemBalance:number,
    public itemName:string,
    public itemType:string
  ){}
}

export class InputFlow{
  constructor(
    public fromList:InputItem[],
    public toList:PropertyItem[]
  ){}
}

export class InputPost{
  constructor(
    public fromItem:string,
    public toItem:string,
    public tranAccount:number,
    public shortComment:string
  ){}
}