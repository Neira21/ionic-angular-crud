import { Component, inject, input, OnInit } from '@angular/core';
import { IonItem, IonThumbnail, IonLabel } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
  standalone: true,
  imports: [IonItem, IonThumbnail, IonLabel, RouterLink],
})
export class ProductItemComponent implements OnInit {
  productService = inject(ProductService);
  constructor() {}
  ngOnInit() {}

  product = input<any>();

  getImage() {
    return this.productService.getImage(this.product());
  }
}
