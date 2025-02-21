import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-updateproduct',
  imports: [ReactiveFormsModule,HttpClientModule],
  providers: [ProductService],
  templateUrl: './updateproduct.component.html',
  styleUrl: './updateproduct.component.css'
})
export class UpdateproductComponent implements OnInit {

  myData: any;

  constructor(private fb: FormBuilder, private serv: ProductService, private router: ActivatedRoute) {
    this.myData = fb.group({
      productName: '',
      productDesc: '',
      productPrice: '',
      productStock: ''
    })
  }

  productId: any;

  ngOnInit(): void {
    this.productId = this.router.snapshot.params['id'];
     this.serv.getSpecificProduct(this.productId).subscribe((res: any)=>{
      this.myData = this.fb.group({
        productName: res['productName'],
        productDesc: res['productDesc'],
        productPrice: res['productPrice'],
        productStock: res['productStock']
      })
    })
  }

  updateData(){
    this.serv.updateSpecificData(this.productId, this.myData.value).subscribe((res: any)=>{
      console.log(res);
      alert("Updated Record Successfully...");
      window.location.href = "http://localhost:4200/";
    });
  }

}
