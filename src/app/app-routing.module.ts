import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: 'home',
        loadChildren: () => import('@app/pages/home/home.module').then((m) => m.HomeModule),
    },
    {
        path: 'product',
        loadChildren: () =>
            import('@app/pages/product/product.module').then((m) => m.ProductModule),
    },
    {
        path: 'errors/error-403',
        loadChildren: () => import('@app/components/errors/403/error-403.module').then((m) => m.Error403Module),
    },
    {
        path: 'errors/error-500',
        loadChildren: () => import('@app/components/errors/500/error-500.module').then((m) => m.Error500Module),
    },
    {
        path: '**',
        loadChildren: () => import('@app/components/errors/404/error-404.module').then((m) => m.Error404Module),
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            onSameUrlNavigation: 'reload',
        }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
