import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
@Injectable()
export class PiechartService {

  constructor(private http:Http) { }

  getPieChart():Observable<PieChart>{
    return this.http.get("/finance-api/getPieChart").map(res=>res.json());
  }

}

export class Legend{
  constructor(
    public data:string[]
  ){}
}
export class Series{
  constructor(
    public data:number[],
    public name:string,
    public stack:string,
    public type:string
  ){}
}
export class xAxis{
  constructor(
    public boundaryGap:string,
    public data:string[],
    public type:string
  ){}
}

export class PieChart{
   
  constructor(
    public legend:Legend,
    public series:Series[],
    public xAxis:xAxis[],
    public title:any,
    public tooltip:any,
    public toolbox:any,
    public grid:any,
    public yAxis:any
   
  ){

  }
}