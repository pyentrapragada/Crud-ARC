import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private productService:ProductsService) { }
productId;
productDetails:any;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data)=>{
      console.log(data);
      

      this.productId=data.id;
      this.productService.viewProduct(this.productId ).subscribe((productData)=>{
console.log(productData.productName);
        this.productDetails=productData;
        console.log(this.productDetails);
        
      });

    });
  }

}
