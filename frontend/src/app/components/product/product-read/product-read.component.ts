import { TranslocoService } from '@ngneat/transloco';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { LOCALE_CONFIG } from '@ngneat/transloco-locale';
import { CurrencyPipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[]

  displayedColumns = ['id', 'name', 'price', 'actions']

  constructor(private productService: ProductService, private route: ActivatedRoute,
    private translocoService: TranslocoService,
    private router: Router) {}

  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products
    })
  }

}
