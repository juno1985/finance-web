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

  getOutPutFlow():Observable<OutFlow>{
    return this.http.get("/finance-api/getOutputFlow").map(res=>res.json());
  }

  //后台传过来toList=null
  getPropReorgFlow():Observable<OutFlow>{
    return this.http.get("/finance-api/PropReorgFlow").map(res=>res.json());
  }

  getProp():Observable<PropertyItem[]>{
    return this.http.get("/finance-api/prodatas").map(res=>res.json());
  }

  getPropTotal():Observable<number>{
    return this.http.get("/finance-api/getTotal").map(res=>res.json());
  }

  sendMail(){
    return this.http.get("/finance-api/sendMail").map(res=>res.json()).subscribe(
      res=>{
        //.json()函数会将string转化为object
        // console.log("得到的状态码: " + res.json().mesg);
        this.dialogService.show(<BuiltInOptions>{
          content: res.mesg,
          icon: 'success',
          size: 'sm',
          timeout: 1500,
          showCancelButton: false,
          showCloseButton:false,
          showConfirmButton:false
      });
      }
    );
  }

  getHistData(id:number):Observable<PagerHist>
  {
    return this.http.get("/finance-api/hist/"+id).map(res=>res.json());
  }

  postInputFlow(inputPost:InputPost){
    // console.log("得到: "+ inputPost.fromItem + ' ' +inputPost.toItem + ' '+inputPost.tranAccount);
    return this.http.post('/finance-api/postInputFlow',inputPost).subscribe(
      res=>{
        //.json()函数会将string转化为object
        // console.log("得到的状态码: " + res.json().mesg);
        this.dialogService.show(<BuiltInOptions>{
          //直接读取服务器端返回的AjaxModel.mesg,并回显弹出成功框
          content: res.json().mesg,
          icon: 'success',
          size: 'sm',
          timeout: 1500,
          showCancelButton: false,
          showCloseButton:false,
          showConfirmButton:false
      });
      }
    );
  }

  postOutputFlow(inputPost:InputPost){
    // console.log("得到: "+ inputPost.fromItem + ' ' +inputPost.toItem + ' '+inputPost.tranAccount);
    return this.http.post('/finance-api/postOutputFlow',inputPost).subscribe(
      res=>{
        //.json()函数会将string转化为object
        // console.log("得到的状态码: " + res.json().mesg);
        this.dialogService.show(<BuiltInOptions>{
          content: res.json().mesg,
          icon: 'success',
          size: 'sm',
          timeout: 1500,
          showCancelButton: false,
          showCloseButton:false,
          showConfirmButton:false
      });
      }
    );
  }

  postPropReorgFlow(inputPost:InputPost){
    // console.log("得到: "+ inputPost.fromItem + ' ' +inputPost.toItem + ' '+inputPost.tranAccount);
    return this.http.post('/finance-api/postPropReorgFlow',inputPost).subscribe(
      res=>{
        //.json()函数会将string转化为object
        // console.log("得到的状态码: " + res.json().mesg);
        this.dialogService.show(<BuiltInOptions>{
          content: res.json().mesg,
          icon: 'success',
          size: 'sm',
          timeout: 1500,
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

export class OutFlow{
  constructor(
    public fromList:PropertyItem[],
    public toList:PropertyItem[]
  ){}
}

export class InputPost{
  constructor(
    public fromItem:number,
    public toItem:number,
    public tranAccount:number,
    public shortComment:string
  ){}
}
export class HistData{
  constructor(
    public chgAmmount:number,
    public chgComment:string,
    public chgTime:Date,
    public fromItem:string,
    public toItem:string
  ){}
}
export class PagerHist{
  constructor(
    public datas:HistData[],
    public currentPage:number,
    public totalPage:number
  ){}
}