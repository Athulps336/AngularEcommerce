import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  constructor(private fb:FormBuilder, private ds:DataService, private router:Router){}


  ngOnInit(): void {}

// modoel form

  addProduct=this.fb.group({
    pid:['',[Validators.required,Validators.pattern('[0-9]+')]],
    pname:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]+')]],
    pCat:['',[Validators.required,Validators.pattern('[0-9]+')]],
    price:['',[Validators.required,Validators.pattern('[0-9]+')]],
    Description:['',[Validators.required,Validators.pattern('[0-9a-zA-Z@#$%^&*()_+={}[\]|\\:;"\'<>,.?/~`-]+')]],
    available:['',[Validators.required,Validators.pattern('[a-zA-Z]+')]],
    image:['',[Validators.required,Validators.pattern('[a-zA-Z0-9@#$%^&*()_+={}[\]|\\:;"\'<>,.?/~`-]+')]],
    rating:['',[Validators.required,Validators.pattern('[0-9]+')]],
    review:['',[Validators.required,Validators.pattern('[a-zA-Z]+')]],
    vendor:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]+')]],
    warrenty:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]+')]]

  })

  // add product method

  addNewproduct(){
    let path=this.addProduct.value
    const newData={
      id:path.pid,
      productName:path.pname,
      categoryId:path.pCat,
      description:path.Description,
      price:path.price,
      isAvailable:path.available,
      productImage:path.image,
      rating:path.rating,
      review:path.review,
      vendorNames:path.vendor,
      warrenty:path.warrenty
    }
    this.ds.addNewProduct(newData).subscribe((data:any)=>{
      alert('Added new Product')
      this.router.navigateByUrl('')
    })
  }



}
