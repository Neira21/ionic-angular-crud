import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonList,
  IonItem,
  IonInput,
  IonLabel,
  IonTextarea,
  IonButton,
  ToastController,
} from '@ionic/angular/standalone';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.page.html',
  styleUrls: ['./form-product.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonButtons,
    IonMenuButton,
    IonInput,
    IonItem,
    IonList,
    IonLabel,
    IonTextarea,
    IonButton,
  ],
})
export class FormProductPage implements OnInit {
  productToUpdate: any | null = null;
  productId: number | null = null;
  isEditMode = false;

  productService = inject(ProductService);
  fb = inject(NonNullableFormBuilder);
  route = inject(ActivatedRoute);
  router = inject(Router);
  toastController = inject(ToastController);

  get title(): string {
    return this.productToUpdate ? 'Actualizar producto' : 'Agregar producto';
  }

  selectedFile: File | null = null;

  form = this.fb.group({
    name: this.fb.control('', [Validators.required, Validators.minLength(3)]),
    price: this.fb.control(null, [
      Validators.min(0.01),
      Validators.max(999999),
    ]),
    description: this.fb.control(''),
  });

  constructor() {}

  ngOnInit() {
    // Verificar si hay un ID en la ruta para modo edición
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.productId = Number(id);
      this.isEditMode = true;
      this.loadProductData();
    }
  }

  // Cargar datos del producto para editar
  loadProductData() {
    if (this.productId) {
      this.productService.getProductById(this.productId).subscribe({
        next: (product) => {
          this.productToUpdate = product;

          // Rellenar el formulario con los datos existentes
          this.form.patchValue({
            name: product.name,
            price: product.price,
            description: product.description,
          });
        },
        error: (error) => {
          console.error('Error al cargar producto:', error);
          // Opcional: navegar de vuelta o mostrar error
          this.router.navigate(['/products']);
        },
      });
    }
  }

  // Manejar la selección de archivo
  onFileSelected(event: any) {
    const file = event.target.files[0];
    console.log('Archivos seleccionados:', event.target.files[0]);
    if (file) {
      this.selectedFile = file;
      console.log('Archivo seleccionado:', file.name);
    }
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Formulario válido, enviando datos...', this.form.value);
      const formData = new FormData();

      // Agregar los datos del formulario
      formData.append('name', this.form.value.name || '');
      const priceValue = this.form.value.price;
      if (
        priceValue !== null &&
        priceValue !== undefined &&
        priceValue !== ''
      ) {
        const numericPrice = Number(priceValue);
        if (!isNaN(numericPrice) && numericPrice > 0) {
          formData.append('price', numericPrice.toString());
        }
      }

      formData.append('description', this.form.value.description || '');

      console.log('Name:', formData.get('name'));
      console.log('Price:', formData.get('price'));

      // Agregar el archivo si existe
      if (this.selectedFile) {
        formData.append('imageUrl', this.selectedFile);
        console.log('Archivo incluido en FormData', this.selectedFile.name);
      }

      // Decidir si crear o actualizar
      if (this.isEditMode && this.productId) {
        this.updateProduct(formData);
      } else {
        this.createProduct(formData);
      }
    }
  }

  // Crear nuevo producto
  private createProduct(formData: FormData) {
    this.productService.addProduct(formData).subscribe({
      next: (response) => {
        console.log('Producto agregado exitosamente:', response);
        this.showSuccessToast('Producto creado exitosamente');
        // Navegar de vuelta a la lista de productos
        this.router.navigate(['/products']);
      },
      error: (error) => {
        console.error('Error al agregar producto:', error);
      },
    });
  }

  // Actualizar producto existente
  private updateProduct(formData: FormData) {
    console.log('formdata', formData);
    if (this.productId) {
      this.productService
        .updatePatchProduct(this.productId, formData)
        .subscribe({
          next: (response) => {
            console.log('Producto actualizado exitosamente:', response);
            this.showSuccessToast('Producto actualizado exitosamente');
            // Navegar de vuelta a la lista de productos
            this.router.navigate(['/products']);
          },
          error: (error) => {
            console.error('Error al actualizar producto:', error);
          },
        });
    }
  }

  // Mostrar toast de éxito
  private async showSuccessToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'top',
      color: 'success',
    });
    await toast.present();
  }
}
