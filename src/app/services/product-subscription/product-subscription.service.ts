import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Plans, ProductSubscription } from '@app/models/product-subscription.model';
import { environment } from '@environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductSubscriptionService implements Resolve<any> {
  productSubscriptions: ProductSubscription[] = [];
  constructor(private http: HttpClient) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {

      return new Promise((resolve, reject) => {
          Promise.all([this.getProductSubscriptions()]).then(
              resolve,
              reject
          );
      });
  }

  getProductSubscriptions(): Promise<ProductSubscription[]> {
      return new Promise((resolve, reject) => {
          this.http.get<ProductSubscription[]>(`${environment.apiUrl}/products`).subscribe((response: any) => {
              this.productSubscriptions = response.products;
              this.productSubscriptions.map((productSubscription, productSubscriptionIndex) => {
                return productSubscription?.plans?.sort((a, b) => (a.priceCents > b.priceCents) ? 1 : -1);
              })
              
              resolve(response);
          }, reject);
      });
  }

}
