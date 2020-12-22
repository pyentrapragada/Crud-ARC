import { Component, OnInit } from '@angular/core';
// import { threadId } from 'worker_threads';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  dataLength;
  lastObj;
  constructor(private productService:ProductsService) {
    this.productService.getAllProducts().subscribe((data)=>{
      
      this.dataLength=data.length;
      
      this.lastObj=data[this.dataLength].id

      
  
    })
   }

  ngOnInit(): void {
  }
  addNewProduct(form){
    console.log(form.value)
  
    let newProduct={
  
  id: this.lastObj,//Unique
  productName: form.value.product_name,
  productDesc: form.value.prduct_description,
  categoryId:form.value.product_category,
  price: form.value.product_price,
  rating: form.value.Product_rating,
  
};
console.log(newProduct);
this.productService.createProduct(newProduct).subscribe((data)=>{
console.log(data);
});
    }

  }


