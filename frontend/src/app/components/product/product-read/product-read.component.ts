import { Component, OnInit, LOCALE_ID } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { CommonModule, NgFor, registerLocaleData } from '@angular/common';
import { MatTableModule } from '@angular/material/table'
import { RouterModule } from '@angular/router';

import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt);

@Component({
  selector: 'app-product-read',
  standalone: true,
  imports: [NgFor, MatTableModule, RouterModule, CommonModule],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }],
  templateUrl: './product-read.component.html',
  styleUrl: './product-read.component.css'
})
export class ProductReadComponent implements OnInit {
  products!: Product[];
  displayedColumns = ['id', 'name', 'price', 'action']

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products
    })
  }
}
