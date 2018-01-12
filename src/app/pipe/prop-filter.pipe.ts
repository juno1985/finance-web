import { Pipe, PipeTransform,Injectable } from '@angular/core';
import { PropertyItem } from '../shared/item.service';

@Pipe({
  name: 'propFilter'
})

export class PropFilterPipe implements PipeTransform {

  transform(propItems: any[], id?: any): any[] {
   
    if(!propItems)
    console.log("No propItems");
    if(!id) return propItems;
    // console.log("filter---> "+id);
    // console.log(typeof(id));
  
    return propItems.filter(
      item=>{
        // console.log("---- "+item.id);
        // console.log(item.id == id)
        // console.log(typeof(item.id));
        return item.id != id;
      }
    )
    ;
  }

}
