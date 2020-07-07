import { urls } from './../../../environments/urls';
import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private snackBar: MatSnackBar,
              private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }
  
  read(): Observable<Product[]> {
    return this.http.get<Product[]>(urls.PRODUCT)
  }

  readById(id: string): Observable<Product> {
    return this.http.get<Product>(this.getUrlId(id))
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(urls.PRODUCT, product)
  }
  
  update(product: Product): Observable<Product> {
    return this.http.put<Product>(this.getUrlId(product.id.toString()), product)
  }
  
  delete(id: string): Observable<Product> {
    return this.http.delete<Product>(this.getUrlId(id))
  }
  
  getUrlId(id: string) {
    const url = `${urls.PRODUCT}/${id}`
    return url
  }

}
