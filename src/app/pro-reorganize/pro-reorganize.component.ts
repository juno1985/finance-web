import { Component, OnInit } from '@angular/core';
import { ItemService, PropertyItem } from './../shared/item.service';
import { FormGroup,FormBuilder,FormControl,Validators } from '@angular/forms';
@Component({
  selector: 'app-pro-reorganize',
  templateUrl: './pro-reorganize.component.html',
  styleUrls: ['./pro-reorganize.component.css']
})
export class ProReorganizeComponent implements OnInit {

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
    this.itemService.getPropReorgFlow().subscribe(
      outputFlow => { 
        this.propertyList = outputFlow.fromList;
        this.outputList = outputFlow.fromList;
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
}
