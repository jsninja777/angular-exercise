import { NgModule } from '@angular/core';
import { ContainerComponent } from './container/container.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@app/shared/shared.module';
import { ProductSubscriptionService } from '@app/services/product-subscription/product-subscription.service';

const routes = [
  {
      path: '',
      component: ContainerComponent,
      resolve: {
        data: ProductSubscriptionService
      },
      children: [
          {
              path: 'subscription',
              loadChildren: async () => (await import('@app/pages/product/product-subscription/product-subscription.module')).ProductSubscriptionModule,
          },
      ]
  },
];

@NgModule({
  declarations: [
    ContainerComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductModule { }
