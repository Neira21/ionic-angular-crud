import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/products';

  getProducts() {
    return this.http.get<any[]>(this.apiUrl);
  }

  getImage(product: any) {
    return `http://localhost:3000${product.imageUrl}`;
  }
}
