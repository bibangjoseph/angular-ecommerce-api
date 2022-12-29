import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) { }

    async getProducts() {
        return new Promise((resolve) => {
            this.http.get<Product[]>(environment.apiUrl + 'products').subscribe((result) => {
                resolve(result);
            });
        })
    }

    async getCategories() {
        return new Promise((resolve) => {
            this.http.get(environment.apiUrl + 'products/categories').subscribe((result) => {
                resolve(result);
            });
        })
    }
}
