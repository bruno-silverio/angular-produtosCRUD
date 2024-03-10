import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { MatButtonModule } from "@angular/material/button";

import { ProductCreateComponent } from "../../components/product/product-create/product-create.component";

@Component({
  selector: 'app-product-crud',
  standalone: true,
  imports: [
    MatButtonModule,
    ProductCreateComponent
  ],
  templateUrl: './product-crud.component.html',
  styleUrl: './product-crud.component.css'
})
export class ProductCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  navigateToProductCreate(): void {
    this.router.navigate(['/products/create'])
  }
}
