import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@core/guards/auth.guard';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'home',
        canActivate: [AuthGuard],
        loadChildren: () => import('@app/home/home.module').then(m => m.HomeModule),
        title: 'Home'
    },
    {
        path: 'auth',
        loadChildren: () => import('../auth/auth.module').then(m => m.AuthModule),
        title: 'Auth'
    },
    {
        path: 'billing',
        canActivate: [AuthGuard],
        loadChildren: () => import('@app/billing/billing.module').then(m => m.BillingModule)
    },
    {
        path: 'invertory',
        canActivate: [AuthGuard],
        loadChildren: () => import('@app/inventory/inventory.module').then(m => m.InventoryModule),
        title: 'Inventory'
    },
    {
        path: 'profile',
        canActivate: [AuthGuard],
        loadChildren: () => import('@app/profile/profile.module').then(m => m.ProfileModule),
        title: 'Profile'
    },
    {
        path: 'reports',
        canActivate: [AuthGuard],
        loadChildren: () => import('@app/reports/reports.module').then(m => m.ReportsModule),
        title: 'Reports'
    },
    {
        path: '**',  // Wildcard route for unmatched paths
        loadChildren: () => import('@app/error/error.module').then(m => m.ErrorModule),
        title: 'Error'
      },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
