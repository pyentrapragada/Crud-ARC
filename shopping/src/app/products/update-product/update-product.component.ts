import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private productService:ProductsService) { }
productId=0;
productDetails;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data)=>{
      console.log(data);
      this.productId=data.id;
      this.productService.viewProduct(this.productId).subscribe((productData)=>{
        console.log(productData);
        this.productDetails=productData;//get the existing data of the produt

      });

    });
    
  } 
  updateProduct(form){
    console.log(form);
    const updateProduct={

      
  productName: form.value.productName,
  productDesc: form.value.productDescription,
  categoryId:form.value.productCategory,
  price: form.value.productPrice,
  rating: form.value.ProductRating,
      
};
    this.productService.updateProduct(this.productId,updateProduct).subscribe((data)=>{
      console.log(data);

    });

  }

}
