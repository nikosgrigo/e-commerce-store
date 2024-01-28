import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { SaleComponent } from './pages/sale/sale.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: '', redirectTo: '/products', pathMatch: 'full' },
    
    {
        path: 'products',
        component: HomeComponent,
        // children: [
        //     {
        //         path: 'details/:id',
        //         component: ProductDetailsComponent
        //     },
        // ]
    },

    {
        path: 'details/:id',
        component: ProductDetailsComponent
    },

    {
        path: 'cart',
        component: CartComponent
    },

    {
        path: 'sale',
        component: SaleComponent
    },
    
    { path: '**', component: PageNotFoundComponent }
];
