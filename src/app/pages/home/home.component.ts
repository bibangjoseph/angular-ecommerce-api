import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    constructor(private apiService: ApiService, private router: Router) { }

    ngOnInit() {
        this.getProducts();
        this.getCategories();
    }


    async getProducts() {
        this.apiService.getProducts().then((result) => {
            this.products = result;
            this.loading = false;
        })
    }

    async getCategories() {
        this.apiService.getCategories().then((result) => {
            this.categories = result;
        })
    }

    async changeCategory(libelle: string) {
        this.categorySelected = libelle;
    }

    async showDetail(product: number) {
        console.log(product)
        this.router.navigate(['/product/' + product])
    }
}
