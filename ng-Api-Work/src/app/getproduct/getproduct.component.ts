import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-getproduct',
  imports: [HttpClientModule,RouterLink],
  providers: [ProductService],
  templateUrl: './getproduct.component.html',
  styleUrl: './getproduct.component.css'
})
export class GetproductComponent implements OnInit {
  constructor(private serv: ProductService) {};
  
  productsCollection: any;

  ngOnInit(): void {
    this.serv.getAllData().subscribe((res)=>{
      console.log(res);
      this.productsCollection = res;
    })
  }

  deleteProduct(id: any) {
    this.serv.deleteProduct(id).subscribe((res)=>{
      alert("Delleted Record Successfully...");
    })
  }
}
