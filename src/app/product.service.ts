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

  getProductById(id: number) {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  getImage(product: any) {
    return `http://localhost:3000${product.imageUrl}`;
  }

  addProduct(productData: FormData) {
    return this.http.post<any>(this.apiUrl, productData);
  }

  deleteProduct(id: number) {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  updateProduct(id: number, productData: FormData) {
    return this.http.put<any>(`${this.apiUrl}/${id}`, productData);
  }

  updatePatchProduct(id: number, productData: Partial<FormData>) {
    return this.http.patch<any>(`${this.apiUrl}/${id}`, productData);
  }
}
