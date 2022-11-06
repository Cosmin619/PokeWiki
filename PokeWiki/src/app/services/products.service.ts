import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class ProductsService{
    private restAPI: string;

    constructor(private http:HttpClient) {
        this.restAPI=environment.restAPI;
    }

    addProduct(product:any){
        return this.http.post(`${this.restAPI}/add-product`,product);
    }
    listProduct(){
        return this.http.get(`${this.restAPI}`);
    }
}