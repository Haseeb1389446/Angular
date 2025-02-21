import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  url = "http://localhost:3000/product";

  constructor(private http: HttpClient) {};

  submitData(data:any) {
    return this.http.post(this.url,data);
  }

  getSpecificProduct(id:any){
    return this.http.get(`${this.url}/${id}`);
  }

  updateSpecificData(id: any, body: any){
    return this.http.put(`${this.url}/${id}`,body)
  }
}
