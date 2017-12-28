import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

@Injectable()
export class ItemService {


  constructor(private http:Http) { 

  }

  getInputFlow():Observable<InputFlow>{
    return this.http.get("/finance-api/getInputFlow").map(res=>res.json());
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