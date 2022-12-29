import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ApiService } from 'src/app/services/api.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    products: any;
    categories: any;
    categorySelected = '';
    searchText = '';
    p = 1;
    loading = true;
    constructor(private apiService: ApiService) { }

    ngOnInit() {
        this.getProducts();
        this.getCategories();
    }


    async getProducts() {
        this.apiService.getProducts().then((result) => {
            this.products = result;
            this.loading = false;
            console.log(result)
        })
    }

    async getCategories() {
        this.apiService.getCategories().then((result) => {
            this.categories = result;
            console.log(result)
        })
    }

    async changeCategory(libelle: string) {
        this.categorySelected = libelle;
        console.log(libelle)
    }
}
