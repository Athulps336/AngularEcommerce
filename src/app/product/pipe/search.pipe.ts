import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(productArray:any[],filterString:string,propName:string):any {
    const result:any=[]

    if(!productArray || filterString=='' || propName=='' ){
      return productArray
    }
    else{
      productArray.forEach((item:any)=>{           //forEach is used to get each element in this array
        if(item[propName].trim().toLowerCase()    // both arrays are coverted into lower case to compare
        .includes(filterString.trim().toLowerCase())){   // trim method used to remove white spaces
  
          result.push(item)
        }
      })
    }
    return result
 
  }
  
}

