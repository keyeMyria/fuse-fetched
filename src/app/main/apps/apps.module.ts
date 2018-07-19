import { NgModule } from '@angular/core';

import { FuseSharedModule } from '@fuse/shared.module';
import { routing } from './apps.routing';

@NgModule({
    imports : [
        routing,
        FuseSharedModule,

    ]
})
export class AppsModule
{
}
