import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductSubscriptionComponent } from './product-subscription/product-subscription.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@app/shared/shared.module';

const routes = [
  {
      path: '',
      component: ProductSubscriptionComponent
  },
];

@NgModule({
  declarations: [
    ProductSubscriptionComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductSubscriptionModule { }
