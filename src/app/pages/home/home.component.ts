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
	constructor(private apiService: ApiService) { }

	ngOnInit() {
		this.getProducts();
	}


	async getProducts() {
		this.apiService.getProducts().then((result) => {
			this.products = result;
			console.log(result)
		})
	}
}
