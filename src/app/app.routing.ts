import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';


const appRoutes: Routes = [
    {
        path        : 'apps',
        loadChildren: './main/apps/apps.module#AppsModule'
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });
