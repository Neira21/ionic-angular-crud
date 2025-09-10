import {
  Component,
  inject,
  input,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import {
  IonItem,
  IonThumbnail,
  IonLabel,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonButton,
  IonIcon,
} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { ProductService } from '../product.service';
import { CurrencyPipe, TitleCasePipe } from '@angular/common';
import { DemoPipe } from '../demo-pipe';
import { addIcons } from 'ionicons';
import { trash } from 'ionicons/icons';

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
    TitleCasePipe,
    DemoPipe,
    IonButton,
    IonIcon,
  ],
})
export class ProductItemComponent implements OnInit {
  productService = inject(ProductService);

  product = input<any>();

  // Evento para solicitar eliminación (solo emite, no ejecuta)
  @Output() deleteRequested = new EventEmitter<number>();

  constructor() {
    // Registrar el icono de eliminar
    addIcons({ trash });
  }

  ngOnInit() {}

  getImage() {
    return this.productService.getImage(this.product());
  }

  // Solo emite evento, no hace la llamada HTTP
  onDeleteClick() {
    const productId = this.product().id;
    this.deleteRequested.emit(productId);
  }
}
