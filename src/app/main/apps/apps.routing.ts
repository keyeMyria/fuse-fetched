import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path        : 'dashboards/analytics',
        loadChildren: './dashboards/analytics/analytics.module#AnalyticsDashboardModule'
    },
    {
        path        : 'chat',
        loadChildren: './chat/chat.module#ChatModule'
    }

];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
