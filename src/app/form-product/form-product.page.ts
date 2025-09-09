import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  NonNullableFormBuilder,
  ReactiveFormsModule,
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
} from '@ionic/angular/standalone';

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
  fb = inject(NonNullableFormBuilder);

  form = this.fb.group({
    title: this.fb.control(''),
    price: this.fb.control(0),
    description: this.fb.control(''),
  });

  constructor() {}

  ngOnInit() {
    console.log(this.form.value);
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
