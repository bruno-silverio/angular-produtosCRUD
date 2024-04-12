import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatButtonModule } from "@angular/material/button";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from "@angular/forms";

import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-create',
  standalone: true,
  imports: [
    MatButtonModule,
    MatSnackBarModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
  ],
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.css'
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: '',
    price: null
  }

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void { }

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Product created successfully!')
      this.router.navigate(['/products'])
    })
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }
}
