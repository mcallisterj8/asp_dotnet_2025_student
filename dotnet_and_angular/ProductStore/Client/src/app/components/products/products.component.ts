import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  private _productService = inject(ProductService);

  ngOnInit(): void {
    console.log("HELLO FROM COMP");

    this._productService.getAllProducts().subscribe((res) => {
      console.log('res:', res);
    });
  }

}
