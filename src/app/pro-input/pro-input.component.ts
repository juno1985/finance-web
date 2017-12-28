import { ItemService } from './../shared/item.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl } from '@angular/forms';


@Component({
  selector: 'app-pro-input',
  templateUrl: './pro-input.component.html',
  styleUrls: ['./pro-input.component.css']
})
export class ProInputComponent implements OnInit {


  formModel:FormGroup;

  constructor() { 
    let fb = new FormBuilder();
    this.formModel=fb.group({
      //默认空，验证是否是正数
      tranAccount:[null,this.positiveNumberValidator]
    });
  }

  ngOnInit() {
    /** 这里需要使用item.service得到服务端数据填充下拉菜单*/
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

  onSearch(){
       
     //表单全部验证过才能提交
     if(this.formModel.valid){
      console.log(this.formModel.value);
     }
  }
}
