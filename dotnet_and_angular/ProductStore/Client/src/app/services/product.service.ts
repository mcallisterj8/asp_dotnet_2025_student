import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _http = inject(HttpClient);

  private _productListSubject: BehaviorSubject<Product[]> =
    new BehaviorSubject<Product[]>([] as Product[]);

  private _productSubject: BehaviorSubject<Product | null> =
    new BehaviorSubject<Product | null>(null);


  public productList$: Observable<Product[]> = 
    this._productListSubject.asObservable();

  public product$: Observable<Product | null> = 
    this._productSubject.asObservable();

  constructor() { }

  // These two get methods allow us to peer into the subject without having to subscribe
  // to an Observable
  public get productList(): Product[] {
    return this._productListSubject.value;    
  }  

  public get product(): Product | null {
    return this._productSubject.value;
  }

  public getAllProducts(): Observable<Product[]> {    

    return this._http.get<Product[]>(`/api/products`).pipe(
      tap((productList) => {      
        console.log(productList);
        // Place product list inside of BehaviorSubject
        this._productListSubject.next(productList);
      })
    );
  }

  public select(product: Product | null): void {
    this._productSubject.next(product);
  }

}
