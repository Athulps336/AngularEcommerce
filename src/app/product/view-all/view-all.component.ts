import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent implements OnInit {

  allProductArray:any
  searchData:any

  // to fiter products
  filterData:any

  constructor(private ds:DataService) { }

  ngOnInit(): void{
    this.ds.viewAllProducts().subscribe((result:any)=>{
      this.allProductArray=result
      console.log(this.allProductArray);
      this.filterData= this.allProductArray
      
    })
        this.ds.searchInput.subscribe((data:any)=>{
          this.searchData= data
        })

  }

  // filter products function

  filterProducts(catId:any){
    this.filterData= this.allProductArray.filter(
      (item:any)=>item.categoryId==catId || catId=='')
      console.log(this.filterData);
      
  }

}


