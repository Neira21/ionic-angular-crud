import { Component, inject, input, OnInit } from '@angular/core';
import {
  IonItem,
  IonThumbnail,
  IonLabel,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { ProductService } from '../product.service';
import { CurrencyPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { DemoPipe } from '../demo-pipe';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
  standalone: true,
  imports: [
    //IonItem,
    //IonThumbnail,
    //IonLabel,
    RouterLink,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    CurrencyPipe,
    UpperCasePipe,
    TitleCasePipe,
    DemoPipe,
  ],
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
