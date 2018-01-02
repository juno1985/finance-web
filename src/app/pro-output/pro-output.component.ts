import { ItemService, PropertyItem } from './../shared/item.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-pro-output',
  templateUrl: './pro-output.component.html',
  styleUrls: ['./pro-output.component.css']
})
export class ProOutputComponent implements OnInit {

  formModel:FormGroup;
  outputList:PropertyItem[];
  propertyList:PropertyItem[];

  constructor(private itemService:ItemService) {
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
    this.itemService.getOutPutFlow().subscribe(
      outputFlow => { 
        this.propertyList = outputFlow.fromList;
        this.outputList = outputFlow.toList;
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
      this.itemService.postOutputFlow(this.formModel.value);
     }
  }

}
