import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule, MatCheckboxModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule, MatMenuModule, MatRippleModule, MatSelectModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';

import * as fromGuards from 'app/main/apps/mail-ngrx/store/guards/index';
import { MailNgrxStoreModule } from 'app/main/apps/mail-ngrx/store/store.module';
import { MailNgrxComponent } from 'app/main/apps/mail-ngrx/mail.component';
import { MailNgrxListComponent } from 'app/main/apps/mail-ngrx/mail-list/mail-list.component';
import { MailNgrxListItemComponent } from 'app/main/apps/mail-ngrx/mail-list/mail-list-item/mail-list-item.component';
import { MailNgrxDetailsComponent } from 'app/main/apps/mail-ngrx/mail-details/mail-details.component';
import { MailNgrxMainSidenavComponent } from 'app/main/apps/mail-ngrx/sidenavs/main/main-sidenav.component';
import { MailNgrxComposeDialogComponent } from 'app/main/apps/mail-ngrx/dialogs/compose/compose.component';
import { MailNgrxService } from 'app/main/apps/mail-ngrx/mail.service';

const routes: Routes = [
    {
        path       : 'label/:labelHandle',
        component  : MailNgrxComponent,
        canActivate: [fromGuards.ResolveGuard]
    },
    {
        path       : 'label/:labelHandle/:mailId',
        component  : MailNgrxComponent,
        canActivate: [fromGuards.ResolveGuard]
    },
    {
        path       : 'filter/:filterHandle',
        component  : MailNgrxComponent,
        canActivate: [fromGuards.ResolveGuard]
    },
    {
        path       : 'filter/:filterHandle/:mailId',
        component  : MailNgrxComponent,
        canActivate: [fromGuards.ResolveGuard]
    },
    {
        path       : ':folderHandle',
        component  : MailNgrxComponent,
        canActivate: [fromGuards.ResolveGuard]
    },
    {
        path       : ':folderHandle/:mailId',
        component  : MailNgrxComponent,
        canActivate: [fromGuards.ResolveGuard]
    },
    {
        path      : '**',
        redirectTo: 'inbox'
    }
];

@NgModule({
    declarations   : [
        MailNgrxComponent,
        MailNgrxListComponent,
        MailNgrxListItemComponent,
        MailNgrxDetailsComponent,
        MailNgrxMainSidenavComponent,
        MailNgrxComposeDialogComponent
    ],
    imports        : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatCheckboxModule,
        MatDialogModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatToolbarModule,

        TranslateModule,

        FuseSharedModule,

        MailNgrxStoreModule
    ],
    providers      : [
        MailNgrxService,
        fromGuards.ResolveGuard
    ],
    entryComponents: [MailNgrxComposeDialogComponent]
})
export class FuseMailNgrxModule
{
}
