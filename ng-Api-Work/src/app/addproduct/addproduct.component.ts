import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-addproduct',
  imports: [ReactiveFormsModule, HttpClientModule],
  providers: [ProductService],
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.css',
})
export class AddproductComponent {
  mydata: any;

  constructor(private fb: FormBuilder, private productService: ProductService) {
    this.mydata = fb.group({
      productName: '',
      productDesc: '',
      productPrice: '',
      productStock: ''
    })
  }

  addData() {
    // console.log(this.mydata.value);
    this.productService.submitData(this.mydata.value).subscribe((res)=>{
      console.log(res);
      alert("Data Submitted successfully...");
    })
  }
}
