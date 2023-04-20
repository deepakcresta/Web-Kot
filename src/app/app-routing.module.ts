import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: 'customers',
    loadChildren: () =>
      import('./client/customers/customers.module').then(
        (m) => m.CustomersModule
      ),
  },

  {
    path: 'orders',
    loadChildren: () =>
      import('./client/orders/orders.module').then((m) => m.OrdersModule),
  },
  {
    path: 'menu',
    loadChildren: () =>
      import('./client/menu/menu.module').then((m) => m.MenuModule),
  },
  {
    path: 'gallery',
    loadChildren: () =>
      import('./client/gallery/gallery.module').then((m) => m.GalleryModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./client/home/home.module').then((m) => m.HomeModule),
  },
 
  { path: 'contact-us', loadChildren: () => import('./contact-us/contact-us.module').then(m => m.ContactUsModule) },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
