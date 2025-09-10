import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
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
import { ActivatedRoute } from '@angular/router';

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
  // Eliminar OnPush para que funcione con arrays tradicionales
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsPage implements OnInit {
  productsService = inject(ProductService);
  route = inject(ActivatedRoute);

  // Array tradicional en lugar de Observable
  products: any[] = [];
  loading = false;

  ngOnInit(): void {
    this.loadProducts();
  }

  // 🔄 Se ejecuta cada vez que regresas a esta página
  ionViewWillEnter() {
    this.loadProducts();
  }

  // Cargar productos desde la API
  loadProducts() {
    this.loading = true;
    this.productsService.getProducts().subscribe({
      next: (products) => {
        this.products = products;
        this.loading = false;
        console.log('Productos cargados:', products);
      },
      error: (error) => {
        console.error('Error al cargar productos:', error);
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
      },
    });
  }

  // Manejar solicitud de eliminación de producto
  onDeleteRequested(productId: number) {
    console.log('Solicitada eliminación del producto ID:', productId);

    this.productsService.deleteProduct(productId).subscribe({
      next: (response) => {
        console.log('Producto eliminado exitosamente:', response);

        // ✅ ÓPTIMO - Actualizar la lista local eliminando el producto
        this.products = this.products.filter(
          (product) => product.id !== productId
        );

        // Aquí puedes agregar toast de éxito
        // this.showSuccessToast('Producto eliminado exitosamente');
      },
      error: (error) => {
        console.error('Error al eliminar producto:', error);

        // Aquí puedes agregar toast de error
        // this.showErrorToast('Error al eliminar el producto');
      },
    });
  }
}
