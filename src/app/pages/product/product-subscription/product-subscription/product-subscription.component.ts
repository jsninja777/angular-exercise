import { Component, OnInit } from '@angular/core';
import { ProductSubscriptionService } from '@app/services/product-subscription/product-subscription.service';

@Component({
  selector: 'app-product-subscription',
  templateUrl: './product-subscription.component.html',
  styleUrls: ['./product-subscription.component.scss']
})
export class ProductSubscriptionComponent implements OnInit {
  productSubscriptions: any[] = [];
  constructor(public productSubscriptionService: ProductSubscriptionService) { }

  ngOnInit(): void {
    this.productSubscriptions = this.productSubscriptionService.productSubscriptions
  }

}
