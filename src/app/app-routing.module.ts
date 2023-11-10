import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: () => import('app/home/home.module').then(m => m.HomeModule) },
    { path: 'auth', loadChildren: () => import('app/auth/auth.module').then(m => m.AuthModule) },
    { path: 'billing', loadChildren: () => import('app/billing/billing.module').then(m => m.BillingModule) },
    { path: 'invertory', loadChildren: () => import('app/inventory/inventory.module').then(m => m.InventoryModule) },
    { path: 'profile', loadChildren: () => import('app/profile/profile.module').then(m => m.ProfileModule) },
    { path: 'reports', loadChildren: () => import('app/reports/reports.module').then(m => m.ReportsModule) }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
