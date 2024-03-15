import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { MatButtonModule } from "@angular/material/button";

import { ProductCreateComponent } from "../../components/product/product-create/product-create.component";
import { ProductReadComponent } from "../../components/product/product-read/product-read.component";

@Component({
    selector: 'app-product-crud',
    standalone: true,
    templateUrl: './product-crud.component.html',
    styleUrl: './product-crud.component.css',
    imports: [
        MatButtonModule,
        ProductCreateComponent,
        ProductReadComponent
    ]
})
export class ProductCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  navigateToProductCreate(): void {
    this.router.navigate(['/products/create'])
  }
}
