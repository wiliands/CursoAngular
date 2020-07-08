import { urls } from './../../../environments/urls';
import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, EMPTY } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private snackBar: MatSnackBar,
              private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }
  
  read(): Observable<Product[]> {
    return this.http.get<Product[]>(urls.PRODUCT)
  }

  readById(id: Number): Observable<Product> {
    return this.http.get<Product>(this.getUrlId(id))
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(urls.PRODUCT, product).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  
  update(product: Product): Observable<Product> {
    return this.http.put<Product>(this.getUrlId(product.id), product).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }
  
  delete(id: Number): Observable<Product> {
    return this.http.delete<Product>(this.getUrlId(id)).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }
    
  getUrlId(id: Number) {
    const url = `${urls.PRODUCT}/${id}`
    return url
  }
      
  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true);
    return EMPTY;
  }
}
