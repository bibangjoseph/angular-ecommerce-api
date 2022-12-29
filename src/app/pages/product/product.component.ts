import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ApiService } from 'src/app/services/api.service';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
    product!: Product;
    idProduct: any;
    loading = true;
    constructor(private route: ActivatedRoute, private apiService: ApiService) {
        this.idProduct = route.snapshot.paramMap.get('product');
    }

    ngOnInit(): void {
        this.getProduct(this.idProduct)
    }


    async getProduct(id: string) {
        this.apiService.getProduct(id).then((result: any) => {
            this.product = result;
            this.loading = false;
            console.log(this.product)
        })
    }

    count(i: number) {
        return new Array(i);
    }



}
