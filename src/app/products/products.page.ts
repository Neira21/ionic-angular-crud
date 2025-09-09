import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonMenuButton,
  IonButtons,
} from '@ionic/angular/standalone';
import { ProductService } from '../product.service';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    ProductItemComponent,
    IonButtons,
    IonMenuButton,
  ],
})
export class ProductsPage implements OnInit {
  productsService = inject(ProductService);

  products: any[] = [];

  ngOnInit(): void {}

  constructor() {
    this.productsService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }
}
