import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path        : 'dashboards/analytics',
        loadChildren: './dashboards/analytics/analytics.module#AnalyticsDashboardModule'
    }

];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
