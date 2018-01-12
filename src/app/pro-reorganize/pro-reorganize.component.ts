import { Component, OnInit } from '@angular/core';
import { ItemService, PropertyItem, OutFlow } from './../shared/item.service';
import { FormGroup,FormBuilder,FormControl,Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import 'rxjs/Rx';//响应式编程必须导入
@Component({
  selector: 'app-pro-reorganize',
  templateUrl: './pro-reorganize.component.html',
  styleUrls: ['./pro-reorganize.component.css']
})
export class ProReorganizeComponent implements OnInit {

  formModel:FormGroup;
  outputList:PropertyItem[];
  propertyList:PropertyItem[];
  obOut:OutFlow;
  toId:number;
  fromId:number;
  private itemId:number;
  //响应式
  private ifilter:FormControl=new FormControl();

  constructor(private itemService:ItemService) {

    //事件订阅
    this.ifilter.valueChanges.debounceTime(500).subscribe(value=>this.itemId=value);

    let fb = new FormBuilder();
    this.formModel=fb.group({
      fromItem:['',Validators.required],
      //默认空，验证是否是正数
      tranAccount:[null,this.positiveNumberValidator],
      toItem:['',Validators.required],
      shortComment:['']
    });
  }

  ngOnInit() {
    this.itemService.getPropReorgFlow()
    .subscribe(
      outputFlow => { 
        // this.propertyList = outputFlow.fromList;
        // this.outputList = outputFlow.fromList;
        this.obOut=outputFlow;
      }
     );

  }

  positiveNumberValidator(control:FormControl):any{

    let amcct=parseInt(control.value);

    if(!amcct&&amcct!=0)
    return null;

    if(amcct>0){
        return null;} 
    else
      { return {positiveNum:true};}
  }

  onSubmit(){
       
     //表单全部验证过才能提交
     if(this.formModel.valid){
      // console.log(this.formModel.value);
      this.itemService.postPropReorgFlow(this.formModel.value);
     }
  }

  propIn(event:any){
     console.log(event.target.value + "------>" + event.target.id);

    //  console.log(typeof(event.target.value));
    //  console.log(typeof("toItem"));
     if('toItem' === event.target.id){
         console.log("set from ID " + event.target.value);
       this.fromId = event.target.value;

     }else if("fromItem" === event.target.id){
      // console.log("from");
      this.toId = event.target.value;
     }
    // console.log(event);
  }
}
