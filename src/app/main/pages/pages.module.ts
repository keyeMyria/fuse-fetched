import { NgModule } from '@angular/core';

import { LoginModule } from 'app/main/pages/authentication/login/login.module';
import { LockModule } from 'app/main/pages/authentication/lock/lock.module';
import { ComingSoonModule } from 'app/main/pages/coming-soon/coming-soon.module';

@NgModule({
    imports: [
        // Authentication
        LoginModule,
        LockModule,

        // Coming-soon
        ComingSoonModule,


    ]
})
export class PagesModule
{

}
